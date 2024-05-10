const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const dburl = "mongodb://localhost:27017/course"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message)
});


const app = express() 
app.use(cors())
app.use(express.json()) 
const courserouter = require('./routes/courseroute')
app.use("",courserouter)
const port = '2029'
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})