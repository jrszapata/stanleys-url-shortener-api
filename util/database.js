const Sequelize = require('sequelize');

let {
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
} = process.env;


const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    'dialect': 'mysql',
    'host': DB_HOST,
    'port': DB_PORT, 
});

module.exports = sequelize;