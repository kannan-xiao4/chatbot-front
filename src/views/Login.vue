<template>
    <div class="login">
        <h1>Chat</h1>
        <div v-if="isAuthlaized">
            [{{ user.displayName }}]
            <button type="button" @click="doLogout">ログアウト</button>
        </div>
        <div v-else key="logout">
            <button type="button" @click="doLogin">ログイン</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Firebase from 'firebase';

@Component
export default class Login extends Vue {
    @Prop() public user: any;

    get isAuthlaized(): boolean {
        return this.user != null;
    }

    public doLogin(): void {
        const provider = new Firebase.auth.TwitterAuthProvider();
        Firebase.auth().signInWithPopup(provider);
    }

    public doLogout(): void {
        Firebase.auth().signOut();
    }
}
</script>
