import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginView: false,
    signUpView: false,
    profileFormView: false,
    profilePage: false,
  },
  mutations: {
    changeLoginView(state) {
      state.signUpView = false;
      state.loginView = !state.loginView;
    },
    changeSignUpView(state) {
      state.loginView = false;
      state.signUpView = !state.signUpView;
    },
    changeProfileFormView(state) {
      state.signUpView = false;
      state.profileFormView = !state.profileFormView;
    },
    changeToProfilePage(state) {
      state.loginView = false;
      state.signUpView = false;
      state.profileFormView = false;
      state.profilePage = !state.profilePage;
    },
  },
});
