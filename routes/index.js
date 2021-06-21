const express = require("express");
const router = express.Router();

// Require controller modules
const category_controller = require("../controllers/categoryController");
const item_controller = require("../controllers/itemController");

/// CATEGORY ROUTES ///

// GET all categories
router.get("/", category_controller.category_list);

// GET request for specific category page
router.get("/category/:name", category_controller.category_detail);

// GET request for creating Category
router.get("/new-category", category_controller.category_create_get);

// POST request for creating Category
router.post("/new-category", category_controller.category_create_post);

/// ITEM ROUTES ///

// GET request for creating Item
router.get("/new-item", item_controller.item_create_get);

// POST request for creating Item
router.post("/new-item", item_controller.item_create_post);

module.exports = router;
