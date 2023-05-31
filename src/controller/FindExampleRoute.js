import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const { filter } = req.query;
        let sentences = await wordsRepository.getFilteredSentences(filter);
        return res.status(200).send(sentences);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});

//ADD NEW WORD
router.post("/", async (req, res, next) => {
    try {
        const data = req.body
        const newWord = await wordsRepository.createLib(data);
        return res.send(newWord)
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});

export default router