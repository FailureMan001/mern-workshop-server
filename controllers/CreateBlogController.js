// *TODO: ทำหน้าที่ติดต่อกับฐานข้อมูล และดำเนินการกับฐานข้อมูล

const slugify = require("slugify")
const Blogs   = require("../models/blogs") 
const { v4: uuidv4 } = require('uuid')

//* ฟังก์ชัน create จะใช้บันทึกข้อมูล
exports.create = (req, res)=>{
    const {title, content, author}= req.body
    let slug = slugify(title)

    // ! กรณีที่ title เป็นภาษาไทย slug มันจะเป็นค่าว่าง
    // ! จึงต้องใช้ UUID มาทดแทน
    if(!slug)slug=uuidv4();

    //* Validate ตรวจสอบข้อมูลที่ถูก request มาว่า เป็นค่าว่างหรือไม่
    switch (true) {
        case ! title:
            return res.status(400).json({error:"กรุณาป้อนชื่อบทความ"})
            break;
        case ! content:
            return res.status(400).json({error:"กรุณาป้อนบทความ"})
            break;
    }
    // บันทึกข้อมูล
    Blogs.create({title, content, author, slug},(err, blog)=>{
        if(err){
            res.status(400).json({error:"มีชื่อบทความซ้ำกัน"})
        }
        res.json(blog)
    })
} 