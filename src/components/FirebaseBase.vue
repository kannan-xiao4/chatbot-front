<template>
    <div class="firebasebase">
        <main>
            <router-view v-bind:data="user"></router-view>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Firebase from 'firebase';

@Component
export default class FirebaseBase extends Vue {
    public user: any = null;

    private created(): void {
        Firebase.auth().onAuthStateChanged((user) => {
            this.user = user ? user : null;
        });
    }
}
</script>
