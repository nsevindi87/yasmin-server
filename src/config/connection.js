import { Sequelize } from "sequelize";

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;