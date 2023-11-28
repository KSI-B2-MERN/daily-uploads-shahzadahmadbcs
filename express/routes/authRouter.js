
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/signup", authController.signUp);
router.get('/login', authController.login);


router.get('/deleteuser',userController.deleteUser);

module.exports = router;