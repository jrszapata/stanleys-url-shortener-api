const Sequelize = require('sequelize');
const sequelize = require('../util/database');

class Url extends Sequelize.Model {}

Url.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    hash: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false, 
    },
    link: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Url',
});

module.exports = Url;