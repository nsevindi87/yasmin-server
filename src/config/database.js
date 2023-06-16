import sequelize from './connection.js';
import Words from '../model/WordsModel.js';
import QuizQuestions from "../model/QuizQuestionsModel.js"
import QuizStatistics from "../model/QuizStatisticsModel.js"
import EngTrSentenceEx from "../model/ExampleSentencesModel.js"
import EngGeSentenceEx from "../model/ExampleSentencesModel2.js"
import GeTrSentenceEx from "../model/ExampleSentencesModel3.js"
import PersonalTexts from "../model/PersonalTextsModel.js"
import TodoList from "../model/TodoListModel.js"
import User from "../model/UsersModel.js"
import Contacts from "../model/ContactsModel.js"
import Texts from "../model/Texts.js"

User.hasMany(Words, { foreignKey: 'userId', onDelete: "CASCADE" });
Words.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(TodoList, { foreignKey: 'userId', onDelete: 'CASCADE'  });
TodoList.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(QuizQuestions, { foreignKey: 'userId', onDelete: 'CASCADE' });
QuizQuestions.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(QuizStatistics, { foreignKey: 'userId', onDelete: 'CASCADE' });
QuizStatistics.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(PersonalTexts, { foreignKey: 'userId', onDelete: 'CASCADE' });
PersonalTexts.belongsTo(User, { foreignKey: 'userId' });


const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
    await Words.sync({alter:true});
    await QuizQuestions.sync({alter:true});
    await QuizStatistics.sync({alter:true});
    await EngTrSentenceEx.sync({alter:true});
    await EngGeSentenceEx.sync({alter:true});
    await GeTrSentenceEx.sync({alter:true});
    await TodoList.sync({alter:true})
    await PersonalTexts.sync({alter:true})
    await User.sync({alter:true});
    await Contacts.sync({alter:true});
    await Texts.sync({alter:true});
    console.log("OK!")
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connectToDatabase(); 
 