const { updateUser } = require("./usermodel");

module.exports = {
  signUp: async (body) => {
    try {
      return {
        //response: "user signed up",
        response: body,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  login: () => {
    try {
      return {
        response: "user logged in",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};




  