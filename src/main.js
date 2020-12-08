import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import firebase from "firebase";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const firebaseConfig = {
  apiKey: "AIzaSyDn9ppkH1Yq6BfcvIu32zj1aJnmM5oepHM",
  authDomain: "sell-yourself.firebaseapp.com",
  projectId: "sell-yourself",
  storageBucket: "sell-yourself.appspot.com",
  messagingSenderId: "951007557753",
  appId: "1:951007557753:web:de559f99a7a91ea016bca8",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
