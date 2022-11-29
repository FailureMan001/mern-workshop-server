const express = require("express")
const router  = express.Router()
const {update} = require("../controllers/UpdateBlogController")
const {requireLogin} = require("../controllers/authController")

router.put('/oneBlog/:slug', requireLogin, update)

module.exports = router