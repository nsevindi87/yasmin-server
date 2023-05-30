import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();



//ADD NEW WORD
router.post("/", async (req, res, next) => {
    try {
        const {data} = req.body
        const newWord = await wordsRepository.createLib(data);
        return res.send(newWord)
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});

export default router;