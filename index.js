//network call using Express JS
const express = require("express");
const app = express();

//Middelewear
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json()); // Use built-in middleware for parsing JSON

//db.js
const db = require("./db");

// Use CORS to handle cross-origin requests
const cors = require("cors");
app.use(cors());

//.env
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//Authentication And Authorization
const authRouter = require("./routes/AuthUserRoute");
app.use("/user", authRouter);

//Products Route
const productsRouter = require("./routes/ProductsRoute");
app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log("Server Runing... http://localhost:3000/");
  //The app starts a server and listens on port 3000 for connections.
});
