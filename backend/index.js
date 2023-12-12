//3-rd party modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from "express-session";
import cookieParser from "cookie-parser";
//Routes importing's
import userRoute from "./routes/userRoute.js"
dotenv.config();
//Application service point address
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors({
  origin:"*",
  methods:"*",
  allowedHeaders:"Content-Type",
  credentials:true
}));
app.use(session({
  secret:"kumar",
  resave:false,
  saveUninitialized:false,
  cookie:{

    secure:false,
    maxAge:1000*60*60*24
  }
}))

app.use(cookieParser())

//For handling cross origin requests properly

//For parsing the request body =>Json data
app.use(express.json());
//Setting static file
const STATIC_DIR="/home/rajkumar/Documents/social-media-platform/frontend/dist";

app.use(express.static(STATIC_DIR));

//User route handling
app.use("/user",userRoute);


//Route for handling 404 page

app.use((req, res) => {
  res.status(404).send("Page not found...");
});

//Database & server initialization
(async ()=>{
  try {
      await mongoose.connect(process.env.MONGODB_URI)
      console.log("Database Connected...");
      app.listen(PORT, () => {
        console.log(`Server is running at port:http://localhost:${PORT}`);
      });
      
  } catch (error) {
    console.log(error.message);
  }
})()

