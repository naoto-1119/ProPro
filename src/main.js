import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import firebase from "firebase";
import { Tweet } from "vue-tweet-embed";
require("dotenv").config();

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component("Tweet", Tweet);

const firebaseConfig = {
  apiKey: process.env.FB_APIKEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  projectId: process.env.FB_PROJECTID,
  storageBucket: process.env.FB_STORAGEBUCKET,
  messagingSenderId: process.env.FB_MESSAGINGSENDERID,
  appId: process.env.FB_APPID,
};

firebase.initializeApp(firebaseConfig);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
