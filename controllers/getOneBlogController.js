const Blogs   = require("../models/blogs") 

// TODO: ดึงบทความที่สนใจอ้างอิงตาม slug

exports.singleBlog=(req,res)=>{

    const {slug} = req.params
    Blogs.findOne({slug}).exec((err,blog)=>{
        res.json(blog)
    })
}