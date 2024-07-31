const express = require("express");
const router = express.Router();

const ProductSchemaData = require("../model/Products");

const AuthUserSchemaData = require("../model/AuthUser");

const authorizationToken = require("../authorizationToken.js");

//check Admin And Manager
const checkAdminAndManagerRole = async (userID) => {
  try {
    const user = await AuthUserSchemaData.findById(userID);
    if (user.role === "admin" || user.role === "manager") {
      return true;
    }
  } catch (err) {
    return false;
  }
};

//check only Admin
const checkAdminOnlyRole = async (userID) => {
  try {
    const user = await AuthUserSchemaData.findById(userID);
    if (user.role === "admin") {
      return true;
    }
  } catch (err) {
    return false;
  }
};

//Create
router.post("/", authorizationToken, async (request, response) => {
  try {
    if (!(await checkAdminAndManagerRole(request.user.id))) {
      return response.status(403).json({
        message: "Product Creation can be accessed with admin token only.",
      });
    } else {
      const data = request.body; // Assuming the request body contains the Products data
      const newData = new ProductSchemaData(data); // Create a new Data
      const postData = await newData.save(); // Save the new Data to the database
      response.status(200).json(postData);
    }
  } catch (e) {
    response.status(500).json("Internal Server Error..");
  }
});

//Read
router.get("/", authorizationToken, async (request, response) => {
  try {
    if (!(await checkAdminAndManagerRole(request.user.id))) {
      return response.status(403).json({
        message: "Product Get can be accessed with admin, manager token only",
      });
    } else {
      const data = request.body;
      const getData = await ProductSchemaData.find(data);
      response.status(200).json(getData);
    }
  } catch (e) {
    response.status(500).json("Internal Server Error..");
  }
});

//Update
router.put("/:id", authorizationToken, async (request, response) => {
  try {
    if (!(await checkAdminAndManagerRole(request.user.id))) {
      return response.status(403).json({
        message:
          "Product Update can be accessed with admin, manager token only",
      });
    } else {
      const { id } = request.params; // Extract the id from the URL parameter
      const data = request.body; // Updated data for the person

      const updateData = await ProductSchemaData.findByIdAndUpdate(id, data, {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      });
      response.status(200).json(updateData);
    }
  } catch (e) {
    response.status(500).json("Internal Server Error..");
  }
});

//Delete
router.delete("/:id", authorizationToken, async (request, response) => {
  try {
    if (!(await checkAdminOnlyRole(request.user.id))) {
      return response.status(403).json({
        message: "Product Delete can be accessed with admin token only",
      });
    } else {
      const { id } = request.params; // Extract the id from the URL parameter

      const deletedData = await ProductSchemaData.findByIdAndDelete(id);
      response.status(200).json(deletedData);
    }
  } catch (e) {
    response.status(500).json("Internal Server Error..");
  }
});

//Staff
router.get("/staff", (request, response) => {
  try {
    response.status(200).json("Staff will not have any CRUD rights");
  } catch (e) {
    response.status(500).json("Internal Server Error..");
  }
});

module.exports = router;
