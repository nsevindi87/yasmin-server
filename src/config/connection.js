import { Sequelize } from "sequelize";
import Words from "../model/WordsModel.js";

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });

  const connectToDatabase = async () => {
    try {
      await sequelize.authenticate();
      await Words.sync();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Error!!!!!');
    }
  };

  connectToDatabase(); 
  
