const express =require("express")
const cors =require("cors")
const mongoose =require("mongoose")
const app =express()

const DBUrl="mongodb+srv://furnitureApp:5XKADYd9QwJPikEz@cluster0.qb6cey4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//mongodb connections
mongoose.connect(DBUrl,{ useNewUrlParser: true }).then(()=>{
    console.log("mongodb connected successfully")
}).catch((error)=>{
    console.log(" mongodb connected failed",error)
})
//connection end


app.use(express.json())
app.use(cors({origin:'http://localhost:4200'}))

//rotings

const userRouter =require('./routes/user-routes')
const adminRouter =require('./routes/admin-routes')



app.use('/api/user',userRouter)
app.use('/api/admin',adminRouter)







app.listen(3000,()=>{
    console.log("server started 3000 port");
})