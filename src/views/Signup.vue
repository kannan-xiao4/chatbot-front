<template>
    <div class="login">
        <h1>ChatSignup</h1>
        <input type="text" placeholder="Username" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <button type="button" v-on:click="signup">登録</button>

        <div v-if="isAuthlaized">
            [{{ user != null ? user.email : 'null' }}]
            <button type="button" v-on:click="doLogout">ログアウト</button>
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Firebase from 'firebase';

@Component
export default class Signup extends Vue {
    @Prop() public user!: Firebase.User;

    private email: string = '';
    private password: string = '';

    get isAuthlaized(): boolean {
        return this.user != null;
    }

    private signup(): void {
        Firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
            const name = user.user == null ? null : user.user.email;
            alert('Create account: ' + name);
        }).catch((error) => {
            alert(error.message);
        });
    }

    private doLogout(): void {
        Firebase.auth().signOut();
    }
}
</script>
