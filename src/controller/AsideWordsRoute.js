import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();

router.get('/:id', async (req, res, next) => {
    try {
        const pId = req.params.id;
        let words = await wordsRepository.getAsideWordsList(pId);
        return res.status(200).json(words);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});

export default router;