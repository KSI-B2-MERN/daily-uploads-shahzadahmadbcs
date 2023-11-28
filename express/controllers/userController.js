const userService = require('../services/userService')
module.exports = {
  updateUser: (req, res) => {
    try {
      const serviceResponse = userService.updateUser();
      if (serviceResponse.response) {
        res.send({
          response: serviceResponse.response,
        });
      }
      res.send({
        error: serviceResponse.error,
      });
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },
  deleteUser :  (req,res) => {

    try {

        const deleteUserResponse = userService.deleteUser()
        if(deleteUserResponse.response){

            res.send( {response : deleteUserResponse.response})

        }
        res.send({
            error: serviceResponse.error,
          });
        return {
           
        }
       

    }
    
    catch (e){
        return {
            error : e
        }

    }
  }


};