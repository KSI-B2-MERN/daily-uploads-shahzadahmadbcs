const authModel = require("../models/authModel");
const bcrypt =require("bcrypt")
module.exports = {
  signUp: async(body) => {
    try {
      delete body.confirmPassword;
      const signUpResponse = await authModel.signUp(body);
      if (signUpResponse.response) {
        return {
          response: signUpResponse.response,
        };
      }
      return {
        error: signUpResponse.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  login: () => {
    try {
      const signUpResponse = authModel.login();
      if (signUpResponse.response) {
        return {
          response: signUpResponse.response,
        };
      }
      return {
        error: signUpResponse.error,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
