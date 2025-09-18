import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import SuggestTask from "./suggesttask/task.js";
import SuggestCourse from "./SuggestCourse/SuugesCourse.js";


dotenv.config();

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

 app.get("/",(req,res)=>{
    res.send("hii i am pawan maurya")
})

app.post("/suggest",SuggestTask);
app.post("/sugCourse",SuggestCourse);







app.listen(4444, () => {
  console.log("app is listen on 4444")
})