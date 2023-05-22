import express from "express";
import cors from "cors";
import "./config/connection.js"

//ROUTES IMPORT
import WordsRoute from "./controller/WordsRoute.js";

const app = express()

// middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/words", WordsRoute);

const port = 3302

app.listen(port,() =>{
    console.log(` app listening on port http://localhost:${port}`);
})