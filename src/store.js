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
    loginStatus: false,
    allProfileView: false,
    allProductView: false,
    purchasePageView: true,
    profileOrProductView: "profile",
    userEmail: null,
    userId: null,
    userName: null,
    profileDescription: null,
    twitterScreenName: null,
    productInfo: [],
    allProfile: [],
    allProduct: [],
  },
  mutations: {
    changeLoginView(state) {
      state.allProductView = false;
      state.allProfileView = false;
      state.signUpView = false;
      state.loginView = true;
    },
    changeSignUpView(state) {
      state.loginView = false;
      state.allProductView = false;
      state.allProfileView = false;
      state.signUpView = true;
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
    changeToProfileView(state) {
      state.profileOrProductView = "profile";
    },
    changeToProductView(state) {
      state.profileOrProductView = "product";
    },
    changeToAllProfileView(state) {
      state.loginView = false;
      state.signUpView = false;
      state.profileFormView = false;
      state.profileOrProductView = "profile";
      state.allProductView = false;
      state.allProfileView = true;
    },
    changeToAllProductView(state) {
      state.loginView = false;
      state.signUpView = false;
      state.profileFormView = false;
      state.profileOrProductView = "profile";
      state.allProfileView = false;
      state.allProductView = true;
    },
    setUserEmail(state, email) {
      state.userEmail = email;
    },
    setUserId(state, id) {
      state.userId = id;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
    setTwitterScreenName(state, twitter) {
      state.twitterScreenName = twitter;
    },
    setProfileDescription(state, description) {
      state.profileDescription = description;
    },
    setProductInfo(state, productArray) {
      state.productInfo = productArray;
    },
    setAllProfile(state, allProfile) {
      state.allProfile = allProfile;
    },
    setAllProduct(state, allProduct) {
      state.allProduct = allProduct;
    },
  },
});
