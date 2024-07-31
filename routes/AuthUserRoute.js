const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthUserSchemaData = require("../model/AuthUser");

require("dotenv").config();

//Register Method Using POST Request..
router.post("/register", async (request, response) => {
  try {
    const { username, email, password, role } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const dbUser = await AuthUserSchemaData.findOne({ username: username });

    if (dbUser === null) {
      // Create a new User
      const newData = new AuthUserSchemaData({
        username: username,
        email: email,
        password: hashedPassword,
        role: role,
      });

      // Save the new user to the database
      const responseData = await newData.save();
      response.status(200);

      response.send(responseData);
    } else {
      response.status(400);
      response.send("User Alraedy Exist..");
    }
  } catch (e) {
    response.status(500);
    response.send("Internal Server Error..");
  }
});

//Login Method Using POST Request..
router.post("/login", async (request, response) => {
  try {
    // Extract email and password from request body
    const { email, password } = request.body;

    // Find the user by email
    const dbUser = await AuthUserSchemaData.findOne({ email: email });

    // If user does not exist or password does not match, return error, success msg
    if (dbUser === null) {
      response.status(400);
      response.send("Invalid Email..");
    } else {
      const isMatchedPassowrd = await bcrypt.compare(password, dbUser.password);
      if (isMatchedPassowrd === true) {
        // generate Token
        const payload = { id: dbUser.id }; //username: username,
        console.log(payload);
        const jwtToken = jwt.sign(payload, process.env.SECRET_KEY);
        response.status(200);
        // resturn token as response
        response.send({ jwtToken });
      } else {
        response.status(400);
        response.send("Invalid Password..");
      }
    }
  } catch (e) {
    response.status(500);
    response.send("Internal Server Error..");
  }
});

module.exports = router;
