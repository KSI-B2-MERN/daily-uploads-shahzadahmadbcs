const { response } = require("../app");
const authModel = require( "../models/authModel");
module.exports={
    signUp: () => {
        try{
            const SignUpRespons =authModel.signup();
            if (signUPresponse.response){
                return{}
                response: signUPresponse.response,
            }
        }
    }
}