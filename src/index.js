import express from "express";
import cors from "cors";
import "./config/database.js"

//ROUTES IMPORT
import WordsRoute from "./controller/WordsRoute.js";
import AsideWordsRoute from "./controller/AsideWordsRoute.js";
import WordToListRoute from "./controller/WordToListRoute.js"
import DelWordFromListRoute from "./controller/DelWordFromListRoute.js"
import QuizQuestionsRoute from "./controller/QuizQuestionsRoute.js"
import AllQuizQuestionsRoute from "./controller/AllQuizQuestionsRoute.js"
import QuizStatisticsRoute from "./controller/QuizStatisticsRoute.js"
import FindExampleRoute from "./controller/FindExampleRoute.js"
import TodosRoute from "./controller/TodosRoute.js"
import UserRoute from "./controller/UserRoute.js"
import ContactRoute from "./controller/ContactRoute.js"

const app = express()

// middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/words", WordsRoute);
app.use("/asideWords", AsideWordsRoute);
app.use("/wordtolist", WordToListRoute);
app.use("/delwordfromlist", DelWordFromListRoute);
app.use("/quizquestions", QuizQuestionsRoute);
app.use("/allQuizQuestions", AllQuizQuestionsRoute);
app.use("/quizstatistics", QuizStatisticsRoute);
app.use("/findExample", FindExampleRoute);
app.use("/todos", TodosRoute);
app.use("/users", UserRoute);
app.use("/contact", ContactRoute);


const port = 3302

app.listen(port,() =>{
    console.log(` app listening on port http://localhost:${port}`);
})


