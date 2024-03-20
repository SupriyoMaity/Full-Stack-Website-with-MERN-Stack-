require("dotenv").config();
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const port=process.env.PORT||3001
const errorMiddleware=require('./middlewares/error_handling')
// databse
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const db=mongoose.connection;
db.on('error', (e)=>{
    console.log(`Error ${e}`);
});
db.once('open', ()=>{
    console.log("connection successful");
})

// middleware
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET, POST, DELETE, PUT, PATCH, HEAD",
    credentials: true
  }
   
app.use(cors(corsOptions));
app.use(cookieParser());

// routes
app.use("",require("./router/user_routes"));
// error middleware
app.use(errorMiddleware);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:3000`)
});
