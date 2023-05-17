'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Test extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Test.init({
        title: DataTypes.STRING,
        detail: DataTypes.TEXT,
        right_answer: DataTypes.INTEGER,
        wrong_answer_first: DataTypes.INTEGER,
        wrong_answer_second: DataTypes.INTEGER,
        wrong_answer_third: DataTypes.INTEGER,
        course_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Test',
    });
    return Test;
};