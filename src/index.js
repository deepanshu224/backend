import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({
    path:'./env'
})
connectDB()
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants"
// import express from "express"
// const app = express()
// function connectDB() { }
// (async () => {
//     try {
//         await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
//         app.on("errror", (error) => {
//             console.log("ERR:", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log('App is listning on port ${process.env.PORT}')
//         })
//     }
//     catch (error) {
//         console.log("error:", error)
//         throw error
//     }

// })()