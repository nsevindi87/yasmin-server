import Words from "../model/WordsModel.js"
import QuizQuestions from "../model/QuizQuestionsModel.js"
import EngTrSentenceEx from "../model/ExampleSentencesModel.js"
import { Sequelize } from "sequelize";
import { Op } from "sequelize";
import EngToTRModel from "../model/EngToTRModel.js"



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




const createLib= async (data)=>{
  try {
      const newPost = await EngToTRModel.bulkCreate(data)
      return "olustu"
  } catch (error) {
      console.log("hatali")
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


//Get all Data
const getQuizQuestions = async () => {
    try {
        const questions = await QuizQuestions.findAll({
          order: Sequelize.literal('RAND()'),
          limit: 5,
        });
        console.log("Context" + questions);
        return questions;
      } catch (error) {
        console.error(error);
        return [];
      }
 }

//Get Sentences
const getFilteredSentences = async (pValue) => {
    try {
        const sentences = await EngTrSentenceEx.findAll({
            where: {
                [Op.or]: [
                  {
                    english: {
                      [Op.like]: `%${pValue}%`
                    }
                  },
                  {
                    turkish: {
                      [Op.like]: `%${pValue}%`
                    }
                  }
                ]
              }
        });
        return sentences;
      } catch (error) {
        console.error(error);
        return [];
      }
 }






export default {
    getWordsList, createWord, deleteWord, updateWordById, getQuizQuestions,getFilteredSentences,createLib
}