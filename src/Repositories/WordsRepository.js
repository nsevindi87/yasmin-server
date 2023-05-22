import Words from "../model/WordsModel.js"

let words = [
    {
      id: 1,
      name: 'Computer',
    },
    {
      id: 2,
      name: 'Tablet',
    },
    {
      id: 3,
      name: 'Phone',
    },
  ];

//Get all Data
const getWordsList = () => {
    //const words = await Words.findAll()
    return words
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
export {
    getWordsList, //getGreenList, getYellowList, getRedList, deleteGreenWord, deleteYellowWord, deleteDangerWord, deleteAllListWord,addNewWord
}