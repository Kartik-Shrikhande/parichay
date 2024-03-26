const express = require("express");
const router = express.Router();
const userProfileController = require("../controllers/user.Controller")
// const utility = require("../controllers/otp.Controller")
const Middleware= require("../middleware/middleware")

router.post('/signup', userProfileController.userSignup)
router.post('/login', userProfileController.userlogin)
// router.post('/forget', utility.sendEmailVerificationOTP)


router.use(Middleware.authentication)

// router.post('/profile', userProfileController.CreateUserProfile)
router.get('/users', userProfileController.getAllUsers)
router.get('/user', userProfileController.getUser)
router.put('/update', userProfileController.updateUserProfile)
router.delete('/delete', userProfileController.deleteUser)
router.post('/reset', userProfileController.resetPassword)


module.exports=router;