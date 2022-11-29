const express = require("express")
const router  = express.Router()
const {getAllBlogs} = require("../controllers/getBlogsController")


router.get('/Allblog',getAllBlogs)

module.exports = router