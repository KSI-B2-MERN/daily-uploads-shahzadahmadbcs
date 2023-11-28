const sequelize = require("../../bin/dbconnection");
const { Model, DataTypes } = require("sequelize");

class Users extends Model { }
Users.init(
    {
        
        UsersId:{
            primaryKey: true,
            type:DataTypes.STRING(90),
        },
        firstname:{
            type:DataTypes.STRING(34),
            allowNull:false,
        },
        lastname:{
            type:DataTypes.STRING(34),
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING(34),
            allowNull:false,
            unique:true,
        },
        password:{
            type:DataTypes.STRING(30),
            allowNull:false,
        },
       
        
       
    },{
        sequelize,
        timestamps:true,
        paranoid:true,
        modelName:"USERS"
    }
)
  
    module.exports =Users;