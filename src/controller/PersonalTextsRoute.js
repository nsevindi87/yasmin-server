import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();

router.get('/:id', async (req, res, next) => {
    try {
        const pId = req.params.id;
        let personalText = await wordsRepository.getPersonalTextsList(pId);
        return res.status(200).json(personalText);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});

router.get('/text/:id', async (req, res, next) => {
    try {
        const pId = req.params.id;
        let personalText = await wordsRepository.getPersonalText(pId);
        return res.status(200).json(personalText);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});

//ADD NEW WORD
router.post("/", async (req, res, next) => {
    try {
        const word = req.body
        const newWord = await wordsRepository.createText(word);
        return res.send(newWord)
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});

export default router;

