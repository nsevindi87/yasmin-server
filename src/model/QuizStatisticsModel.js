import { Sequelize,DataTypes } from "sequelize";

const sequelize = new Sequelize('yasmin', 'admin', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const QuizStatistics = sequelize.define("QuizStatistics", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    questions: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    correctAnswers: {
        type: DataTypes.INTEGER,
    },
    wrongAnswers: {
        type: DataTypes.INTEGER,
    },
    score: {
        type: DataTypes.INTEGER,
    }
});

export default QuizStatistics;
