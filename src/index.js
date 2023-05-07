import express from "express";
import cors from "cors";

//ROUTES IMPORT
import WordsRoute from "./Routes/WordsRoute.js";

const app = express()

// middleware
app.use(cors());
app.use(express.json()); // express.json() is a built-in middleware  that parses incoming request bodies in JSON format.
app.use(express.urlencoded({ extended: true }));//a built-in middleware that parses incoming request bodies in x-www-form-urlencoded format, with the option "extended: true" allowing for rich objects and arrays to be encoded into the URL-encoded format.

//ROUTES
app.use("/words", WordsRoute);

const port = 8080

app.listen(port,() =>{
    console.log(` app listening on port http://localhost:${port}/api/v1/`);
})
