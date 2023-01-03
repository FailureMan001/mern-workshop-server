// TODO: ออกแบบโครงสร้างข้อมูล (Schema)
//* ชื่อบทความ (title), เนื้อหาบทความ (content), ผู้เขียน (author), slug (URL)

const mongoose = require("mongoose")
//(โครงสร้าง Schema) เราก็จะใช้ mongoose ตัวนี้แหละมาสร้าง Schema ขึ้นมา 
const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true // ห้ามป้อนข้อมูลเป็นค่าว่าง
    },
    content:{
        type:{},
        required:true
    },
    author:{
        type:String,
        default:"Admin"
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }
    
},{timestamps:true})

module.exports = mongoose.model("Blogs", blogSchema)// ส่งออกไปใช้งาน

