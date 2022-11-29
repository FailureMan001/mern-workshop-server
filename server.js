const express  = require("express")
const morgan   = require("morgan")
const cors     = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const createBlogRoute = require('./routes/create')
const getBlogsRoute = require('./routes/getBlogs')
const getOneBlogRoute = require('./routes/getOneBlog')
const removeOneBlogRoute = require('./routes/remove')
const updateOneBlogRoute = require('./routes/update')
const authenticationRoute = require('./routes/authentication')


const app = express()

// Connect Cloud Database เชื่อมฐานข้อมูลบนอินเตอร์เน็ตแล้ว
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: false
})
.then(()=>console.log("successfully"))
.catch((err)=>console.log(err))


//*middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))// ดักตัว req

//route เส้นทางในการส่ง req มายังตัว server ทุกๆเส้นทาง
// ตรงนี้จะนิยาม route เป็น /api
app.use('/api', createBlogRoute)
app.use('/api', getBlogsRoute)
app.use('/api', getOneBlogRoute)
app.use('/api', removeOneBlogRoute)
app.use('/api', updateOneBlogRoute)
//! เส้นทาง Login
app.use('/api', authenticationRoute)


const port = process.env.PORT || 8080
app.listen(port,()=>console.log(`start server in port ${port}`))