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

const apiKey = process.env.FB_APIKEY;
const authDomain = process.env.FB_AUTHDOMAIN;
const projectId = process.env.FB_PROJECTID;
const storageBucket = process.env.FB_STORAGEBUCKET;
const messagingSenderId = process.env.FB_MESSAGINGSENDERID;
const appId = process.env.FB_APPID;

console.log(
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
);

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

firebase.initializeApp(firebaseConfig);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
