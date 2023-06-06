import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let words = await wordsRepository.getTodoList();
        return res.status(200).send(words);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});


//ADD NEW TODO
router.post("/", async (req, res, next) => {
    try {
        const todo = req.body
        const newTodo = await wordsRepository.createTodo(todo);
        return res.send(newTodo)
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});

//DELETE TODO
router.delete("/:id", async (req, res) => {
    const requestedTodoId = req.params.id;
    const deleteWord = await wordsRepository.deleteTodo(requestedTodoId);
    return res.send(`word ${requestedTodoId} is deleted`)
});

//UPDATE TODO
router.put("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedTodo = req.body;
        const newWord = await wordsRepository.updateTodoById(id, updatedTodo);
        return res.status(200).send(newWord)
    } catch (error) {
        next({ status: 500, message: error.message })
    }

});

export default router;