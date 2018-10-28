<template>
    <div id="app">
        <NavHeader></NavHeader>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavHeader from '@/components/NavHeader.vue';

@Component({
  components: {
    NavHeader,
  },
})
export default class App extends Vue {}
</script>

<style>
    @import "assets/app.css";
</style>
