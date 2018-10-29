<template>
    <div class="chatballoon" v-if="hasChat">
        <transition-group name="chat" class="list content">
            <section v-for="{ key, name, image, message } in chatList" :key="key" class="item">
                <div class="item-image"><img :src="image" width="40" height="40"></div>
                <div class="item-detail">
                    <div class="item-name">{{ name }}</div>
                    <div class="item-message">{{ message }}</div>
                </div>
            </section>
        </transition-group>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export default class ChatBalloon extends Vue {
    @Prop() public chat!: any[];

    private get hasChat(): boolean {
        return this.chat != null && this.chat.length > 0;
    }

    private get chatList(): any[] {
        return this.chat;
    }
}
</script>
