import sequelize from './connection.js';
import Words from '../model/WordsModel.js';
import Users from '../model/UsersModel.js';
import QuizQuestions from "../model/QuizQuestionsModel.js"
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
    await Words.sync({alter:true});
    await QuizQuestions.sync({alter:true});
    //await Users.sync({alter:true});
    console.log("OK!")
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connectToDatabase(); 
 
