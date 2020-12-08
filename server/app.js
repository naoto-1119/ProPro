const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./knex.js");
const bodyParser = require("body-parser");

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

// app.post("/user", async (req, res) => {
//   try {
//     const locations = await db.select().table("locations");
//     res.json(locations);
//   } catch (err) {
//     console.error("Error loading locations!", err);
//     res.sendStatus(500);
//   }
// });

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

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
