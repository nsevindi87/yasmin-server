/* import { Sequelize } from "sequelize"; 

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});
 */
/*
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({force:true});
    // IMPORTANT: If force is true, each DAO will do DROP TABLE IF EXISTS 
    // before it tries to create its own table, remove {force:true}
    // if you don't want to drop the existing tables, so use it carefully.
    // you can also delete tables manually and do await sequelize.sync(); which creates the table if it doesn't exist (and does nothing if it already exists)
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connectToDatabase(); 
 */
