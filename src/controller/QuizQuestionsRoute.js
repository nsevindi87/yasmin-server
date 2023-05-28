import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let quizQuestions = await wordsRepository.getQuizQuestions();
        return res.status(200).send(quizQuestions);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});

export default router;