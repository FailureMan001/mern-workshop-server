const express = require("express")
const router  = express.Router()
const {singleBlog} = require("../controllers/getOneBlogController")


router.get('/oneBlog/:slug',singleBlog)

module.exports = router