import { v4 as uuidv4 } from 'uuid';

let words = [
    {
        id: 1,
        firstValue: "A",
        secondValue: "talk speak",
        thirdValue: "konusmak",
        note: "Ich spreche sehr gut Deutsch",
        listGroup: ""
    },
    {
        id: 2,
        firstValue: "B",
        secondValue: "talk speak",
        thirdValue: "konusmak",
        note: "Ich rede leider kein Italien",
        listGroup: "success"
    },
    {
        id: 3,
        firstValue: "C",
        secondValue: "talk speak",
        thirdValue: "konusmak",
        note: "Ich rede leider kein Italien",
        listGroup: "success"
    },
    {
        id: 4,
        firstValue: "D",
        secondValue: "talk speak",
        thirdValue: "konusmak",
        note: "Ich rede leider kein Italien",
        listGroup: "success"
    },
    {
        id: 5,
        firstValue: "E",
        secondValue: "talk about daily",
        thirdValue: "sohbet etmek",
        note: "Ich unterhalte mich ",
        listGroup: "warning"
    },
    {
        id: 6,
        firstValue: "F",
        secondValue: "talk about daily",
        thirdValue: "sohbet etmek",
        note: "Ich unterhalte mich ",
        listGroup: "warning"
    },
    {
        id: 7,
        firstValue: "G",
        secondValue: "talk about daily",
        thirdValue: "sohbet etmek",
        note: "Ich unterhalte mich ",
        listGroup: "warning"
    },
    {
        id: 8,
        firstValue: "H",
        secondValue: "paint",
        thirdValue: "boyamak",
        note: "Ich male jeden Tag",
        listGroup: "danger"
    },
    {
        id: 9,
        firstValue: "I",
        secondValue: "sing",
        thirdValue: "sarki söylemek",
        note: "Ich singe jeden Tag",
        listGroup: "danger"
    }
]

//Get all Data
const getWordsList = () => {
    return words
}

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

export {
    getWordsList, getGreenList, getYellowList, getRedList, deleteGreenWord, deleteYellowWord, deleteDangerWord, deleteAllListWord,addNewWord
}