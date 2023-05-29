import express from "express";
import cors from "cors";
import "./config/database.js"

//ROUTES IMPORT
import WordsRoute from "./controller/WordsRoute.js";
import WordToListRoute from "./controller/WordToListRoute.js"
import DelWordFromListRoute from "./controller/DelWordFromListRoute.js"
import QuizQuestionsRoute from "./controller/QuizQuestionsRoute.js"
import FindExampleRoute from "./controller/FindExampleRoute.js"

const app = express()

// middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/words", WordsRoute);
app.use("/wordtolist", WordToListRoute);
app.use("/delwordfromlist", DelWordFromListRoute);
app.use("/quizquestions", QuizQuestionsRoute);
app.use("/findExample", FindExampleRoute);

const port = 3302

app.listen(port,() =>{
    console.log(` app listening on port http://localhost:${port}`);
})


