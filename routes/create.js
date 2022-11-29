const express = require("express")
const router  = express.Router()
const {create} = require("../controllers/CreateBlogController") //เรียกใช้งานฟังก์ชัน create ใน blogController.js
const {requireLogin} = require("../controllers/authController")

// create router
// '/blog' เป็นการนิยามว่า '/blog' นี้ เป็นตัว Paht ของ ไฟล์ create.js
// router.get('/create',create)
router.post('/create', requireLogin, create)

module.exports = router // module นี้เอาไว้กำหนด '/create' ให้เป็น Route (เส้นทาง) 