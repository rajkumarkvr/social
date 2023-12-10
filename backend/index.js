//3-rd party modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
//Application service point address
const PORT = process.env.PORT || 3000;
const app = express();

//For handling cross origin requests properly
app.use(cors());
//For parsing the request body =>Json data
app.use(express.json());
//Home route
app.get("/", (req, res) => {
  res.send("This is home page");
});

//Route for handling 404 page

app.use((req, res) => {
  res.status(404).send("Page not found...");
});
app.listen(PORT, () => {
  console.log(`Server is running at port:http://localhost:${PORT}`);
});
