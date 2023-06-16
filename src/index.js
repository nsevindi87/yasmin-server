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
import FindEnTrExampleRoute from "./controller/FindEnTrExampleRoute.js"
import FindEnGeExampleRoute from "./controller/FindEnGeExampleRoute.js"
import FindGeTrExampleRoute from "./controller/FindGeTrExampleRoute.js"
import TodosRoute from "./controller/TodosRoute.js"
import UserRoute from "./controller/UserRoute.js"
import ContactRoute from "./controller/ContactRoute.js"
import TextReviewRoute from "./controller/TextReviewRoute.js"
import PersonalTextsRoute from "./controller/PersonalTextsRoute.js"
import errorHandler from "./middleware/errorHandler.js"
import errorHandler404 from "./middleware/errorHandler404.js"

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
app.use("/findEnTrExample", FindEnTrExampleRoute);
app.use("/findEnGeExample", FindEnGeExampleRoute);
app.use("/findGeTrExample", FindGeTrExampleRoute);
app.use("/textreview", TextReviewRoute);
app.use("/textreview/personaltexts", PersonalTextsRoute);
app.use("/todos", TodosRoute);
app.use("/users", UserRoute);
app.use("/contact", ContactRoute);
app.use(errorHandler)
app.use(errorHandler404)



const port = 3302

app.listen(port,() =>{
    console.log(` app listening on port http://localhost:${port}`);
})


