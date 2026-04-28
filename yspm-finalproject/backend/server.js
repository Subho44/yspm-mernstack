require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectdb = require("./database/db");
const courseroutes = require("./routes/courseRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads",express.static("uploads"));
connectdb();
app.get("/",(req,res)=>{
    res.send("API IS WORKING");
});
app.use("/api/courses",courseroutes);
const port = process.env.PORT || 5600;
app.listen(port, ()=>{
    console.log("server is running port 5600");
});