import Words from "../model/WordsModel.js"

//Get all Data
const getWordsList = () => {
    
     return Words.findAll()
   
  
  }







//Get GREEN Data
const getGreenList = () => {
    const greenList = Words.filter((word) => word.wordCategory === "success")
    return greenList
}

//Get YELLOW Data
const getYellowList = () => {
    const yellowList = Words.filter((word) => word.listGroup === "warning")
    return yellowList
}

//Get RED Data
const getRedList = () => {
    const redList = Words.filter((word) => word.listGroup === "danger")
    return redList
}

/*

const deleteGreenWord = (pId, res) => {
    words = words.filter(word => word.id != pId);
    return res.status(200).send({ message: `${pId} deleted` });
}

const deleteYellowWord = (pId, res) => {
    words = words.filter(word => word.id != pId);
    return res.status(200).send({ message: `${pId} deleted` });
}

const deleteDangerWord = (pId, res) => {
    words = words.filter(word => word.id != pId);
    return res.status(200).send({ message: `${pId} deleted` });
}
const deleteAllListWord = (pId, res) => {
    words = words.filter(word => word.id != pId);
    return res.status(200).send({ message: `${pId} deleted` });
}

const addNewWord = (pData,res) => {
    const uuid = uuidv4();
    pData.id = uuid
    words.push(pData)
    return res.status(200).send({ message: `${pData} added` })
}
 */
export default {
    getWordsList, //getGreenList, getYellowList, getRedList, deleteGreenWord, deleteYellowWord, deleteDangerWord, deleteAllListWord,addNewWord
}