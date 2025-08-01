// require('dotenv').config({path:'./env'})  Not good practice to use this it is common js

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
  app.on("error",(error)=>{
    console.log("Err: ",error);
    throw error
  })

  app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is Running at port : ${process.env.PORT}`)
  })
})
.catch((err)=>{
  console.log("MONGO DB Connection Failed !!!",err)
})


