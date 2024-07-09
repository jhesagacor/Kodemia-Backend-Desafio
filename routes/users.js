const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const auth = require("../middlewares/auth");

router.post("/login", usersController.login);
router.post("/", usersController.post);
router.get("/", auth.authToken, usersController.get);

module.exports = router;
