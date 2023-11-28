const { response } = require("../app");
const userModel = require("../models/usermodel");

module.exports = {
  updateUser: () => {
    try {
      const updateUserResponse = userModel.updateUser();
      if (updateUserResponse.response) {
        return {
          response: updateUserResponse.response,
        };
      }
      return {
        error: updateUserResponse.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deleteUser : ()=> {

    try {

      const deleteUserResponse = userModel.deleteUser()
      if (deleteUserResponse.response){
        return {

          response : deleteUserResponse.response
        }

      }
      return {

        response : deleteUserResponse.error
          
      }
    }
    catch (e){
      return {
        error : e,
      }

    }
  }

}