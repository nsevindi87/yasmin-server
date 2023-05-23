import { Sequelize } from "sequelize";
import Words from "../model/WordsModel.js";

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize
