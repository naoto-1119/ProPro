const db = require("../server/knex.js");

(async () => {
  try {
    const email = "test@test.com";
    const user = await db("users").insert({
      email,
    });
    console.log(user);
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
