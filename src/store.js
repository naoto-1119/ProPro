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
    purchasePageView: false,
    reviewPosted: false,
    profileOrProductView: "profile",
    userEmail: null,
    userId: null,
    userName: null,
    profileId: null,
    profileDescription: null,
    twitterScreenName: null,
    selectedProduct: {}, // one product info -> selected
    productInfo: [], // all products of specific user
    reviewInfo: [], // array of reviews (object) for the specific product
    allProfile: [], // all profile
    allProduct: [], // all product
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
      state.profilePage = true;
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
      state.profilePage = false;
      state.profileOrProductView = "profile";
      state.allProductView = false;
      state.purchasePageView = false;
      state.allProfileView = true;
    },
    changeToAllProductView(state) {
      state.loginView = false;
      state.signUpView = false;
      state.profilePage = false;
      state.profileFormView = false;
      state.profileOrProductView = "profile";
      state.allProfileView = false;
      state.purchasePageView = false;
      state.allProductView = true;
    },
    changeToPurchasePageView(state) {
      state.loginView = false;
      state.signUpView = false;
      state.profilePage = false;
      state.profileFormView = false;
      state.profileOrProductView = "profile";
      state.allProductView = false;
      state.allProfileView = false;
      state.purchasePageView = true;
    },
    changeReviewPostedStatus(state) {
      state.reviewPosted = !state.reviewPosted;
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
    // set product info of the specific user. used when showing only the specific users products
    setProductInfo(state, productArray) {
      state.productInfo = productArray;
    },
    // set all profile info. used on main profile screen showing all users info
    setAllProfile(state, allProfile) {
      state.allProfile = allProfile;
    },
    // set all product info. used on main product screen showing all product info
    setAllProduct(state, allProduct) {
      state.allProduct = allProduct;
    },
    // set profile id of the logged in users or signedup user.
    setProfileId(state, id) {
      state.profileId = id;
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
    setReviewInfo(state, reviewObj) {
      state.reviewInfo = reviewObj;
    },
  },
});
