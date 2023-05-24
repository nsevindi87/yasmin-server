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

const deleteWord = async (pId) => {
    return await Words.destroy({
        where:{
            id:pId
        }
    })
}

//Update Word to List
const updateWordById = async (pId, updatedPost)=>{
    try {
        const word = await Words.findByPk(pId)
        if(word){
            await Words.update(updatedPost, {where: {id: pId}})
            return
        }
        return {msg: "No word found with this ID"}
    } catch (error) {
        console.log(error)
    }
}

export default {
    getWordsList, createWord, deleteWord, updateWordById
}