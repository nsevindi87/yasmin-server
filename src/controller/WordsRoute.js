import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let todos = await wordsRepository.getAllWordsList();
        return res.status(200).json(todos);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const pId = req.params.id;
        let todos = await wordsRepository.getWordsList(pId);
        return res.status(200).json(todos);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});

//ADD NEW WORD
router.post("/", async (req, res, next) => {
    try {
        const word = req.body
        const newWord = await wordsRepository.createWord(word);
        return res.send(newWord)
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});

//DELETE WORD
router.delete("/:id", async (req, res) => {
    const requestedPostId = req.params.id;
    const deleteWord = await wordsRepository.deleteWord(requestedPostId);
    return res.send(`word ${deleteWord} is deleted`)
});

router.put("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedWord = req.body;
        const newWord = await wordsRepository.updateWordById(id, updatedWord);
        return res.status(200).send(newWord)
    } catch (error) {
        next({ status: 500, message: error.message })
    }

});

export default router;