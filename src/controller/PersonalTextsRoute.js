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

router.put("/text/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedText = req.body;
        const newtext = await wordsRepository.updatetextById(id, updatedText);
        return res.status(200).send(newtext)
    } catch (error) {
        next({ status: 500, message: error.message })
    }

});

//DELETE WORD
router.delete("/text/:id", async (req, res) => {
    const id = req.params.id;
    const deleteText = await wordsRepository.deleteText(id);
    return res.send(`word ${deleteText} is deleted`)
});

export default router;

