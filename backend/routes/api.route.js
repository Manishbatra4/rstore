const router = require("express").Router();
const AuthController = require("../Controllers/AuthController");
const UserController = require("../Controllers/UserController");
const ProductController = require("../Controllers/ProductController");
const { authVerify } = require("../middleware/auth");

router.use("/auth", AuthController);

router.use("/user", authVerify, UserController);

router.use("/product", authVerify, ProductController);

module.exports = router;
