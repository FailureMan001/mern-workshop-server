const express = require("express")
const router  = express.Router()
const {remove} = require("../controllers/RemoveBlogController")
const {requireLogin} = require("../controllers/authController")

router.delete('/oneBlog/:slug', requireLogin, remove)

module.exports = router