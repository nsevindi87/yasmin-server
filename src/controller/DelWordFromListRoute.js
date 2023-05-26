import express from "express";
const router = express.Router();
import Words from "../model/WordsModel.js"


//DELETE List from WORD
router.post("/", async (req, res, next) => {
    try {
        const { pId } = req.body
        const updatedWord = await Words.findByPk(pId);
        updatedWord.wordCategory = "";
        await updatedWord.save()
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});

export default router;