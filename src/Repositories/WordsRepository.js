import Words from "../model/WordsModel.js"
import QuizQuestions from "../model/QuizQuestionsModel.js"
import EngTrSentenceEx from "../model/ExampleSentencesModel.js"
import { Sequelize } from "sequelize";
import { Op } from "sequelize";
import TodoList from "../model/TodoListModel.js"


/* ==============================================================================================
== //!    WORDS  - ADD - DELETE  - EDIT
==
==================================================================================================*/
//Get all Data
const getWordsList = (pId) => {
     return Words.findAll({
      where: { userId: pId }
    })
  }

//Get all Data for Aside
const getAsideWordsList = (pId) => {
     return Words.findAll({
      where: { userId: pId }
    })
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

/* ==============================================================================================
== //!    QUIZ
==
==================================================================================================*/

//Get all Data
const getQuizQuestions = async () => {
    try {
        const questions = await QuizQuestions.findAll({
          order: Sequelize.literal('RAND()'),
          limit: 5,
        });
        return questions;
      } catch (error) {
        console.error(error);
        return [];
      }
 }

 /* ==============================================================================================
== //!    SENTENCES
==
==================================================================================================*/

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
              },
        limit:10
        })
        console.log(pValue)
        return sentences;
      } catch (error) {
        console.error(error);
        return [];
      }
 }

/* ==============================================================================================
== //!    TODO
==
==================================================================================================*/



//Get all TodoList
const getTodoList = () => {
  return TodoList.findAll({
   order: [['date', 'ASC'], ['time', 'ASC']],
  })
}


//Add New Word to List
const createTodo = async (pTodo)=>{
 try {
     const newPost = await TodoList.create(pTodo)
     return newPost
 } catch (error) {
     console.log(error)
 }
}

const deleteTodo = async (pId) => {
 return await TodoList.destroy({
     where:{
         id:pId
     }
 })
}

//Update Todo
const updateTodoById = async (pId, updatedPost)=>{
  try {
      const word = await TodoList.findByPk(pId)
      if(word){
          await TodoList.update(updatedPost, {where: {id: pId}})
          return
      }
      return {msg: "No word found with this ID"}
  } catch (error) {
      console.log(error)
  }
}


export default {
    getWordsList, createWord, deleteWord, updateWordById,
     getQuizQuestions,getFilteredSentences,getTodoList,
     createTodo,deleteTodo,updateTodoById,getAsideWordsList
}