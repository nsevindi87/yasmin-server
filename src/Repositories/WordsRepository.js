import Words from "../model/WordsModel.js"
import QuizQuestions from "../model/QuizQuestionsModel.js"
import QuizStatistics from "../model/QuizStatisticsModel.js"
import EngTrSentenceEx from "../model/ExampleSentencesModel.js"
import Contacts from "../model/ContactsModel.js"
import { Sequelize } from "sequelize";
import { Op } from "sequelize";
import TodoList from "../model/TodoListModel.js"


/* ==============================================================================================
== //!    WORDS  - ADD - DELETE  - EDIT
==
==================================================================================================*/
//Get all Data
const getAllWordsList = () => {
     return Words.findAll()
  }

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

//!Contact Page
//Create Mail
const createNewMail = async (pMail)=>{
    try {
        const newPost = await Contacts.create(pMail)
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

//Get all Data
const getAllQuizQuestions = async () => {
    try {
        const questions = await QuizQuestions.findAll();
        return questions;
      } catch (error) {
        console.error(error);
        return [];
      }
 }

 //Add New Question to List
const createQuestion = async (pQuestion)=>{
  try {
      const newPost = await QuizQuestions.create(pQuestion)
      return newPost
  } catch (error) {
      console.log(error)
  }
}

const deleteQuestion = async (pId) => {
  return await QuizQuestions.destroy({
      where:{
          id:pId
      }
  })
}


//Update Question to List
const updateQuestionById = async (pId, updatedPost)=>{
  try {
      const word = await QuizQuestions.findByPk(pId)
      if(word){
          await QuizQuestions.update(updatedPost, {where: {id: pId}})
          return
      }
      return {msg: "No word found with this ID"}
  } catch (error) {
      console.log(error)
  }
}

//!STATISTICS
//Get Statistics
const getStatistics = async (pId) => {
  try {
    const result = await QuizStatistics.findAll({
      where: {
        userId: pId,
      },
      attributes: [
        [Sequelize.fn('sum', Sequelize.literal('questions')), 'totalQuestions'],
        [Sequelize.fn('sum', Sequelize.literal('correctAnswers')), 'totalCorrectAnswers'],
        [Sequelize.fn('sum', Sequelize.literal('wrongAnswers')), 'totalWrongAnswers'],
        [Sequelize.fn('sum', Sequelize.literal('score')), 'totalScore'],
      ],
      raw: true,
    });

    const {
      totalQuestions = 0,
      totalCorrectAnswers = 0,
      totalWrongAnswers = 0,
      totalScore = 0,
    } = result[0];

    return {
      totalQuestions,
      totalCorrectAnswers,
      totalWrongAnswers,
      totalScore,
    };
  } catch (error) {
    console.error('Error fetching user word count:', error);
    throw new Error('Failed to fetch user word count');
  }
}

//Get 5 Statistics
const getFiveStatistics =async (pId) =>{
  try {
    const statistics = await QuizStatistics.findAll({
      where: { userId: pId },
      order: [['createdAt', 'DESC']],
      limit: 5
    });
    return statistics
  } catch (error) {
    console.error('Error fetching user word count:', error);
    throw new Error('Failed to fetch user word count');
  }
}


 //Add New Statistic to List
const createStatistic = async (pStatistic)=>{
  try {
      const newStatistic = await QuizStatistics.create(pStatistic)
      return newStatistic
  } catch (error) {
      console.log(error)
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
        limit:30
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
const getTodoList = (pId) => {
  return TodoList.findAll({
    where: { userId: pId },
   order: [['date', 'ASC'], ['time', 'ASC']]
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
     getAllQuizQuestions,
     createQuestion,deleteQuestion,updateQuestionById,
     createTodo,deleteTodo,updateTodoById,getAsideWordsList,
     createStatistic,getStatistics,getFiveStatistics,getAllWordsList,
     createNewMail
}