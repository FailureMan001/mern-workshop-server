const jwt = require("jsonwebtoken")
const {expressjwt} = require("express-jwt")

//! การเข้าสู่ระบบโดย jwt
exports.login=(req,res)=>{
    //* ข้อมูล username & password
    const {username, password}= req.body

    if(password === process.env.PASSWORD){
        // Login เข้าสู่ระบบ
        const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'1d'})
        //* ส่งไปให้ฝั่ง Client ถือเอาไว้
        return res.json({token,username})
    }else{
        return res.status(400).json({error:"รหัสผ่านไม่ถูกต้อง!"})
    }
}

//! ตรวจสอบ token
exports.requireLogin = expressjwt({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:"auth"
})