import Words from "../model/WordsModel.js"

//Get all Data
const getWordsList = () => {
     return Words.findAll()
  }


//Add New Word to List
const createWord = async (pWord)=>{
    try {
        const newPost = await Words.create(pWord)
        return newPost
    } catch (error) {
        console.log(error)
    }
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
    getWordsList, createWord//getGreenList, getYellowList, getRedList, deleteGreenWord, deleteYellowWord, deleteDangerWord, deleteAllListWord,addNewWord
}