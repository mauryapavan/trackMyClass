import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import SuggestTask from "./suggesttask/task.js";
import SuggestCourse from "./SuggestCourse/SuugesCourse.js";



dotenv.config();


const app = express();
const PORT = process.env.PORT || 4444;

app.use(cors({
  origin: "https://trackmyclass-1-0eou.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.options("/*", cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 app.get("/",(req,res)=>{
    res.send("hii i am pawan maurya")
})

app.post("/suggest",SuggestTask);
app.post("/sugCourse",SuggestCourse);







app.listen(PORT, () => {
  console.log("app is listen on 4444")
})
