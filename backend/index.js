//3-rd party modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
//Built-in module
dotenv.config();
//Application service point address
const PORT = process.env.PORT || 3000;
const app = express();
//For handling cross origin requests properly
app.use(cors());
//For parsing the request body =>Json data
app.use(express.json());
//Setting static file
const STATIC_DIR="/home/rajkumar/Documents/social-media-platform/frontend/dist";

app.use(express.static(STATIC_DIR));

//Route for handling 404 page

app.use((req, res) => {
  res.status(404).send("Page not found...");
});
app.listen(PORT, () => {
  console.log(`Server is running at port:http://localhost:${PORT}`);
});
