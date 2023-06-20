import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();

//GET ALL TEXTS
router.get('/', async (req, res, next) => {
    try {
        let textReviews = await wordsRepository.getAllTexts();
        return res.status(200).send(textReviews);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});


//Get Personal Texts By UserId
router.get('/:id', async (req, res, next) => {
    try {
        const pId = req.params.id;
        let text = await wordsRepository.getTextById(pId);
        return res.status(200).json(text);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});

//ADD NEW TEXT
router.post("/", async (req, res, next) => {
    try {
        const text = req.body
        const newText = await wordsRepository.createNewText(text);
        return res.send(newText)
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});


router.put("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedText = req.body;
        const newText = await wordsRepository.updateTextById(id, updatedText);
        return res.status(200).send(newText)
    } catch (error) {
        next({ status: 500, message: error.message })
    }

});

export default router;