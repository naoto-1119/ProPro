require("dotenv").config();

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

module.exports = firebaseConfig;
