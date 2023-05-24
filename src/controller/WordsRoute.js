import express from "express";
//import { getWordsList} from "../repositories/wordsRepository.js"
//getGreenList,getYellowList,getRedList, deleteGreenWord, deleteYellowWord,deleteDangerWord,deleteAllListWord,addNewWord } from "../repositories/wordsRepository.js"
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();


//GET WORDS LIST
//router.get("/", (req, res) => {
//    res.json(getWordsList())
//});

router.get('/', async (req, res, next) => {
    try {
       let words = await wordsRepository.getWordsList();
       return res.status(200).send(words);
    } catch (error) {
       return next({ status: 404, message: error })
    }
 });
 




//GET GREEN LIST
router.get("/success", (req, res) => {
    res.json(getGreenList())
});
//GET YELLOW LIST
router.get("/warning", (req, res) => {
    res.json(getYellowList())
});
//GET YELLOW LIST
router.get("/danger", (req, res) => {
    res.json(getRedList())
});

/*
//ADD NEW WORD
router.post("/", (req, res) => {
    const data= req.body;
    res.json(addNewWord(data,res))
});


 */





/* 

//DELETE GREEN WORD
router.delete("/success/:id", (req, res) => {
    const requestedPostId = req.params.id;
    deleteGreenWord(requestedPostId, res)
    res.json("deleted")
});

//DELETE YELLOW WORD
router.delete("/warning/:id", (req, res) => {
    const requestedPostId = req.params.id;
    deleteYellowWord(requestedPostId, res)
    res.json("deleted")
});

//DELETE RED WORD
router.delete("/danger/:id", (req, res) => {
    const requestedPostId = req.params.id;
    deleteDangerWord(requestedPostId, res)
    res.json("deleted")
});

//DELETE ALLLIST WORD
router.delete("/:id", (req, res) => {
    const requestedPostId = req.params.id;
    deleteAllListWord(requestedPostId, res)
    res.json("deleted")
});



 */



export default router;