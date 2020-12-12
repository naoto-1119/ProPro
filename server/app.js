const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
const bodyParser = require("body-parser");

const axios = require("axios");
const Oauth1Helper = require("./oauth1helper.js");

const app = express();

// Setup Logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Setup Middleware Parser
app.use(bodyParser.json());

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

// GET API
// Gets user object specifying the user email address
app.get("/users", async (req, res) => {
  try {
    console.log("im in get user");
    const { userEmail } = req.query;
    console.log("req query:", userEmail);
    const user = await db
      .select()
      .where({ email: userEmail })
      .table("users");
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

// Gets profile info of specific user by user_id
app.get("/users/profile/id", async (req, res) => {
  try {
    const { userId } = req.query;
    const profile = await db
      .select()
      .where({ user_id: userId })
      .table("profile");
    res.send(profile);
  } catch (err) {
    res.send(err);
  }
});

// gets tweets for specific user
app.get("/users/tweets", async (req, res) => {
  try {
    const { screenName } = req.query;
    // const screenName  = "realDonaldTrump";
    const baseUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json";

    const request = {
      url: `${baseUrl}?screen_name=${screenName}&count=5&include_rts=false`,
      method: "GET",
      body: null,
    };

    let header = Oauth1Helper.getAuthHeaderForRequest(request);
    const result = await axios.get(request.url, { headers: header });

    res.send(result.data.map((tweet) => tweet.id_str));
  } catch (err) {
    res.send(err);
  }
});

// gets products of specific user
app.get("/users/product/id", async (req, res) => {
  try {
    const { userId } = req.query;
    const product = await db
      .select()
      .where({ user_id: userId })
      .table("product");
    res.send(product);
  } catch (err) {
    res.send(err);
  }
});

// gets all profile info
app.get("/users/profile/all", async (req, res) => {
  try {
    const allProfile = await db.select().table("profile");
    res.send(allProfile);
  } catch (err) {
    res.send(err);
  }
});

// gets all product info
app.get("/users/product/all", async (req, res) => {
  try {
    const allProduct = await db.select().table("product");
    res.send(allProduct);
  } catch (err) {
    res.send(err);
  }
});

// gets review info of specific product
app.get("/product/review/id", async (req, res) => {
  try {
    const { productId } = req.query;
    const reviewInfo = await db("product")
      .join("review", "review.product_id", "product.product_id")
      .join("profile", "profile.profile_id", "review.profile_id")
      .select(
        "review.review_id",
        "review.title",
        "review.description",
        "review.rating",
        "review.created_at",
        "profile.profile_id",
        "profile.user_name",
        "profile.twitter_screen_name"
      )
      .where("review.product_id", productId);
    res.send(reviewInfo);
  } catch (err) {
    res.send(err);
  }
});

// Inserts user info to user table
app.post("/users", async (req, res) => {
  try {
    console.log("im in user insert");
    const email = req.body.email;
    const result = await db("users").insert({
      email,
    });
    console.log(result);
    res.send(result);
  } catch (err) {
    console.error("Error inserting user in database!", err);
    res.send(err);
  }
});

// Inserts profile info to profile table
app.post("/users/profile", async (req, res) => {
  try {
    const profileObj = req.body;
    const result = await db("profile").insert(profileObj);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

// Inserts profile info to profile table
app.post("/users/profile", async (req, res) => {
  try {
    const profileObj = req.body;
    const result = await db("profile").insert(profileObj);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

// Inserts product info to product table
app.post("/users/product", async (req, res) => {
  try {
    const productObj = req.body;
    const result = await db("product").insert(productObj);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

// Inserts review info to product table
app.post("/product/review", async (req, res) => {
  try {
    const reviewObj = req.body;
    const result = await db("review").insert(reviewObj);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
