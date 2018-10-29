<template>
    <div class="firebasebase">
        <main>
            <router-view v-bind:user="getUser"></router-view>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Firebase from 'firebase';

@Component
export default class FirebaseBase extends Vue {
    private user: Firebase.User | null = null;

    get getUser(): Firebase.User | null {
        return this.user;
    }

    private created(): void {
        Firebase.auth().onAuthStateChanged((user) => {
            this.user = user != null ? user : null;
        });
    }
}
</script>
