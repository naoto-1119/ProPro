require("dotenv").config();

const apiKey = process.env.VUE_APP_APIKEY;
const authDomain = process.env.VUE_APP_AUTHDOMAIN;
const projectId = process.env.VUE_APP_PROJECTID;
const storageBucket = process.env.VUE_APP_STORAGEBUCKET;
const messagingSenderId = process.env.VUE_APP_MESSAGINGSENDERID;
const appId = process.env.VUE_APP_APPID;

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

module.exports = firebaseConfig;
