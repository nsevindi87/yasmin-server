import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();

//ADD NEW WORD
router.post("/", async (req, res, next) => {
    try {
        const mail = req.body
        const newMail = await wordsRepository.createNewMail(mail);
        return res.send(newMail)
    } catch (error) {
        return next({ status: 500, message: error.message })
    }
});

export default router;