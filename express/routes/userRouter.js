const userController = require('../controllers/userController');

const router = require('express').Router()


router.get('/updateuser' , userController.updateUser)
router.get('/deleteuser' , userController.deleteUser)

module.exports = router;
