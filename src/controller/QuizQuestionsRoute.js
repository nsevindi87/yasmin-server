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

//ADD NEW WORD
router.post("/", async (req, res, next) => {
    try {
        const question = req.body
        const newQuestion = await wordsRepository.createQuestion(question);
        return res.send(newQuestion)
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});

//DELETE WORD
router.delete("/:id", async (req, res) => {
    const pId = req.params.id;
    const deleteQuestion = await wordsRepository.deleteQuestion(pId);
    return res.send(`word ${deleteQuestion} is deleted`)
});

router.put("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedQuestion = req.body;
        const newWord = await wordsRepository.updateQuestionById(id, updatedQuestion);
        return res.status(200).send(newWord)
    } catch (error) {
        next({ status: 500, message: error.message })
    }

});


export default router;