
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router)  // localhost:5000/books


mongoose.connect("mongodb+srv://admin:RzRHrJFgNCblZG8Z@cluster0.5itkajc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connected to db"))
    .then(()=>{
        app.listen(5000);
    }) 
    .catch((err)=>console.log(err));






//RzRHrJFgNCblZG8Z