import sequelize from './connection.js';
import Word from '../model/WordsModel.js';
import Users from '../model/UsersModel.js';

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
    await Word.sync({alter:true});
    //await Users.sync({alter:true});
    console.log("OK!")
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connectToDatabase(); 
 
