import express from "express";
import wordsRepository from "../repositories/wordsRepository.js";
const router = express.Router();

async function printPDF(listName) {
    const browser = await puppeteer.launch({ headless: true });/// Puppeteer launches the Chromium browser in headless mode, which means that the browser runs in the background without displaying any graphical user interface (GUI).
    const page = await browser.newPage();///create a new page
    await page.goto(`http://localhost:3000/${listName}`, { waitUntil: 'networkidle0' }); //go to the selected post
    const pdf = await page.pdf({ format: 'A4' }); ///generate PDF
    await browser.close(); //close the browser
    return pdf; 
 }

 //generate PDF by id
router.get('/pdf/:listName', async (req, res, next) => {
    try {
       const pdf = await printPDF(req.params.listName);
       res.setHeader('Content-Type', 'application/pdf');
       res.setHeader('Content-Disposition', 'attachment; filename=example.pdf');
       return res.send(pdf);
    } catch (error) {
       console.error('Error generating PDF:', error);
       return next({ status: 500, message: 'Error generating PDF' })
    }
 });

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