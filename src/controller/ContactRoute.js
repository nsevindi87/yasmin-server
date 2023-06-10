import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();

//GET ALL MAILS
router.get('/', async (req, res, next) => {
  try {
    const mails = await wordsRepository.getMails();
    return res.status(200).json(mails);
  } catch (error) {
    return next({ status: 404, message: JSON.stringify(error) })
  }
});


//ADD NEW MAIL
router.post("/", async (req, res, next) => {
  try {
    const mail = req.body
    const newMail = await wordsRepository.createNewMail(mail);
    console.log(newMail)
    return res.send(newMail)
  } catch (error) {
    return next({ status: 500, message: error.message })
  }
});

export default router;