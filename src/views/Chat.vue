<template>
    <div class="chat">
        <h1>ChatPage</h1>
        <div v-if="isAuthorized">
            <!-- 　Firebase から取得したリストを描画 -->
            <section v-for="chat in getChatList" v-bind:key="chat.key" class="item">
                <ChatBalloon v-bind:chat="chat"></ChatBalloon>
            </section>

            <!-- 入力フォーム -->
            <form action="" @submit.prevent="doSend" class="form">
                <textarea v-model="input" v-bind:disabled="!user.uid" @keydown.enter.exact.prevent="doSend"></textarea>
                <button type="submit" v-bind:disabled="!user.uid" class="send-button">Send</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Firebase from 'firebase';
import Axios from 'axios';
import ChatBalloon from '@/components/ChatBalloon.vue';
import ApiClient from '@/script/ApiClient';

@Component({
  components: {
    ChatBalloon,
  },
})
export default class Chat extends Vue {
    @Prop() public user!: Firebase.User;

    private chatlist: any = [];
    private input: string = '';

    private get isAuthorized(): boolean {
        return this.user != null;
    }

    private get getChatList(): any {
        return this.chatlist;
    }

    private mounted(): void {
        Firebase.auth().onAuthStateChanged((user) => {
            const REF_MESSAGE = Firebase.database().ref('message');
            if (user) {
                // message に変更があったときのハンドラを登録
                REF_MESSAGE.limitToLast(10).on('child_added', this.childAdded);
            } else {
                // message に変更があったときのハンドラを解除
                REF_MESSAGE.limitToLast(10).off('child_added', this.childAdded);
            }
        });
    }

    private childAdded(snap: any) {
        const message = snap.val();
        this.chatlist.push({
            key: snap.key,
            name: message.name,
            image: message.image,
            message: message.message,
        });
        this.scrollBottom();
    }

    private scrollBottom(): void {
        this.$nextTick(() => window.scrollTo(0, document.body.clientHeight));
    }

    private doSend(): void {
        if (this.user.uid && this.input.length) {
            ApiClient.Post('/api/chat',
                {
                    message: this.input,
                    name : this.user.displayName,
                    image : this.user.photoURL,
                })
                .then( (res) => this.input = '' );
        }
    }
}
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}
.header {
  background: #3ab383;
  margin-bottom: 1em;
  padding: 0.4em 0.8em;
  color: #fff;
}
.content {
  margin: 0 auto;
  padding: 0 10px;
  max-width: 600px;
}
.form {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 100px;
  height: 80px;
  width: 50%;
  background: #f5f5f5;
}
.form textarea {
  border: 1px solid #ccc;
  border-radius: 2px;
  height: 4em;
  width: calc(100% - 6em);
  resize: none;
}
.list {
  margin-bottom: 100px;
}
.item {
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.8em;
}

.send-button {
  height: 4em;
}
/* トランジション用スタイル */
.chat-enter-active {
  transition: all 1s;
}
.chat-enter {
  opacity: 0;
  transform: translateX(-1em);
}

</style>
