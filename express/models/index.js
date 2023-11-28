const sequelize =require("../bin/dbconnection");
const users = require("./definitions/users");

const models =[users];

const db ={};
db.sequalize = sequelize;
sequelize.models =models;

module.exports ={models,db};