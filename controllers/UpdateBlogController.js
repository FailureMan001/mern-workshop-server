const Blogs   = require("../models/blogs") 

exports.update=(req,res)=>{
    const {slug} = req.params
    //* ส่งข้อมูล => title, content, author
    const {title, content, author}=req.body
    Blogs.findOneAndUpdate({slug},{title, content, author},{new:true}).exec((err, oneBlog)=>{
        if(err) console.log(err)
        res.json(oneBlog)
    })
}