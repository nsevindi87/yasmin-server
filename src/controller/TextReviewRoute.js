import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let textReviews = await wordsRepository.getAllTexts();
        return res.status(200).send(textReviews);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});

router.get('/english/:id', async (req, res, next) => {
    try {
        const pId = req.params.id;
        let text = await wordsRepository.getTextById(pId);
        return res.status(200).json(text);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});

export default router;