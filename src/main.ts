import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
    apiKey: process.env.FIRE_BASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
