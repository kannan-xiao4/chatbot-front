<template>
    <div class="login">
        <h1>ChatLogin</h1>
        <div v-if="isAuthlaized">
            [{{ user != null ? user.email : 'null' }}]
            <button v-on:click="doLogout">ログアウト</button>
        </div>
        <div v-else key="logout">
            <input type="text" placeholder="email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button v-on:click="doLogin">ログイン</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Firebase from 'firebase';

@Component
export default class Login extends Vue {
    @Prop() public user!: Firebase.User;

    private email: string = '';
    private password: string = '';

    get isAuthlaized(): boolean {
        return this.user != null;
    }

    private doLogin(): void {
        Firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((res) => {
            alert('sucess login!');
        }, (err) => {
            alert(err.message);
        });
    }

    private doLogout(): void {
        Firebase.auth().signOut();
    }
}
</script>
