import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import firebase from "firebase";
import { Tweet } from "vue-tweet-embed";
import firebaseConfig from "../server/firbase.js";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.component("Tweet", Tweet);

console.log("firebase", firebaseConfig);
firebase.initializeApp(firebaseConfig);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
