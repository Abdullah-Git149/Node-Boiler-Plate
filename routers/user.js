const express = require("express");
const router = express.Router();
const { getTheHelloWorld } = require("../controller/userController");

router.get("/test", getTheHelloWorld);

module.exports = router;
