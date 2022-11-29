const Blogs = require("../models/blogs")

// TODO: ดึงข้อมูลบทความทั้งหมด
exports.getAllBlogs=(req, res)=>{
    Blogs.find({}).exec((err, Allblog)=>{
        res.json(Allblog)
    })
}