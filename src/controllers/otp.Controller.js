
const sgMail = require('@sendgrid/mail');
const {userModel} = require("../models/user.Model");
const {otpModel}= require('../models/otpmodel')
const bcrypt = require('bcrypt')

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
};


