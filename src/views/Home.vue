<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
    <p>{{greetText}}</p>
    <p>greeting count : {{count}} times</p>
    <p v-if="isRegulars">Thanks for many times</p>
    <p>
        <MyButton :greet="greetText" @clicked="onMyButtonClick">hogehoge</MyButton>
    </p>
    <p>
        <ResetButton v-model="greetText"></ResetButton>
    </p>
  </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import MyButton from '@/components/MyButton.vue';
    import ResetButton from '@/components/ResetButton.vue';

    @Component({
      components: {
        ResetButton,
        MyButton,
      },
    })

    export default class Home extends Vue {
        public greetText: string = 'Hello';
        private count: number = 0;

        public get isRegulars(): boolean {
            return this.count >= 5;
        }

        @Watch('count')
        public countChanged() {
            if (this.count === 5) {
                alert('you are regulars');
            }
        }

        public onMyButtonClick(count: number) {
            this.count = count;
            this.greetText = 'Hello World!';
        }
    }
</script>
