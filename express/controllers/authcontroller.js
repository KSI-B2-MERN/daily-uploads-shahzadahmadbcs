const authService = require("../services/authService");
const joi= require ('joi')
const signUpSchema =joi.object().keys({
  firstName:joi.string().min(3).max(10).required(),
  lastName:joi.string().min(3).max(10).required(),
  email:joi.string().email().required(),
  password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  confirmPassword: joi.string().valid(joi.ref("password")).required(),
  
})
module.exports = {
  signUp: async(req, res) => {
    try {
      const validate=await signUpSchema.validateAsync(req.body);
      
      const serviceResponse = await authService.signUp(validate);
      console.log("Validated Credentials: ", validate);
      if (serviceResponse.response) {
        res.send({response: serviceResponse.response,
        });
      }
      res.send({error: serviceResponse.error,
      });
    } catch (error) {
      res.send({
        error: error.message,
      });
    }
  },

  login: (req, res) => {
    try {
      const serviceResponse = authService.login();
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
};
