import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import postRouter from "./routers/postRoute.js"

// app config
const app = express()
const port = 4000

// Middleware
// Using this express skipMiddlewareFunction, whenever we get the request from frontend to backend
app.use(express.json())
// Access the backend from any frontend
app.use(cors())

// DB Connection
connectDB();

//API endpoints
app.use("/api/post", postRouter)

// HTTP method, liquid the data from server like get(), post(), update(), delete()
app.get("/", (req, res) => {
    res.send("API Working")
})

// to run the express server
app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
})