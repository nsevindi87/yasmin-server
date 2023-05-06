import express from 'express';
import "./config/Database.js"
import userRoute from './controller/user-route.js'
import wordRoute from './controller/word-route.js'
import todoRoute from "./controller/todo-route.js"
import cors from 'cors'
import errorHandler from './middleware/errorHandler.js';

const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'))

// API
app.use("/api/v1/users", userRoute);
app.use("/api/v1/words", wordRoute);
app.use(errorHandler)

export default app;