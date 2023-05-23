import Word from "../model/WordsModel.js"


const words = [
    {
        id:3,
        name:"ali"
    }
]


//Get all Data
const getWordsList = () => {
    
     return Word.findAll()
   
  
  }






/* 
//Get GREEN Data
const getGreenList = () => {
    const greenList = words.filter((word) => word.listGroup === "success")
    return greenList
}

//Get YELLOW Data
const getYellowList = () => {
    const yellowList = words.filter((word) => word.listGroup === "warning")
    return yellowList
}

//Get RED Data
const getRedList = () => {
    const redList = words.filter((word) => word.listGroup === "danger")
    return redList
}


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