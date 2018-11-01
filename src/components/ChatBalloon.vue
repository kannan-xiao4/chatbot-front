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

<style scoped>
.item-image img {
  border-radius: 20px;
  vertical-align: top;
}
.item-detail {
  margin: 0 0 0 1.4em;
}
.item-name {
  font-size: 75%;
}
.item-message {
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background: #deefe8;
  border-radius: 4px;
  line-height: 1.2em;
}
.item-message::before {
  position: absolute;
  content: " ";
  display: block;
  left: -16px;
  bottom: 12px;
  border: 4px solid transparent;
  border-right: 12px solid #deefe8;
}
</style>
