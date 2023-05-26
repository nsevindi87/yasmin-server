import express from "express";
const router = express.Router();
import Words from "../model/WordsModel.js"


//ADD List to WORD
router.post("/", async (req, res, next) => {
    try {
        const { pListName, pId } = req.body
        const updatedWord = await Words.findByPk(pId);
        updatedWord.wordCategory = pListName;
        await updatedWord.save()
        res.send("OLDUU")
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});


//DELETE List from WORD
router.post("/", async (req, res, next) => {
    try {
        const { pListName, pId } = req.body
        const updatedWord = await Words.findByPk(pId);
        updatedWord.wordCategory = pListName;
        await updatedWord.save()
        res.send("OLDUU")
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});

export default router;