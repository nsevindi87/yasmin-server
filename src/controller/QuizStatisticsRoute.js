import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();

router.get('/:id', async (req, res, next) => {
    try {
        const pId = req.params.id;
        let statistics = await wordsRepository.getStatistics(pId);
        return res.status(200).send(statistics);
    } catch (error) {
        return next({ status: 404, message: error })
    }
});


//ADD NEW WORD
router.post("/", async (req, res, next) => {
    try {
        const statistics = req.body
        const newWord = await wordsRepository.createStatistic(statistics);
        return res.send(newWord)
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});

export default router;