<template>
    <div class="chatballoon">
        <div class="item-image"><img v-bind:src="chat.image" width="40" height="40"></div>
        <div class="item-detail">
            <div class="item-name">{{ chat.name }}</div>
            <div class="item-message">{{ chat.message }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ChatBalloon extends Vue {
    @Prop() public chat!: any;
}
</script>
