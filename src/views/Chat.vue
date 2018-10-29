<template>
    <div class="chat">
        <h1>ChatPage</h1>
        <div v-if="isAuthlaized">
            <!--　Firebase から取得したリストを描画（トランジション付き）　-->
            <transition-group name="chat" tag="div" class="list content">
                <section v-for="{ key, name, image, message } in chat" :key="key" class="item">
                    <div class="item-image"><img :src="image" width="40" height="40"></div>
                    <div class="item-detail">
                        <div class="item-name">{{ name }}</div>
                        <div class="item-message">{{ message }}</div>
                    </div>
                </section>
            </transition-group>

            <!-- 入力フォーム -->
            <form action="" @submit.prevent="doSend" class="form">
                <textarea v-model="input" :disabled="!user.uid" @keydown.enter.exact.prevent="doSend"></textarea>
                <button type="submit" :disabled="!user.uid" class="send-button">Send</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Firebase from 'firebase';

@Component
export default class Chat extends Vue {
    @Prop() public user: any;

    private chat: any;
    private input: string = '';

    get isAuthlaized(): boolean {
        return this.user != null;
    }

    private created(): void {
        Firebase.auth().onAuthStateChanged((user) => {
            const REF_MESSAGE = Firebase.database().ref('message');
            if (user) {
                this.chat = [];
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
        this.chat.push({
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
            // firebase にメッセージを追加
            Firebase.database().ref('message').push({
                message: this.input,
                name: this.user.displayName,
                image: this.user.photoURL,
            }, () => {
                this.input = ''; // フォームを空にする
            });
        }
    }
}
</script>
