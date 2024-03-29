const express = require('express')
const User = require('../models/User')

const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require("../middleware/fetchUser")

const privateKey = "DhruwangIsABillionare"
const router = express.Router()

// create a user using: POST "api/auth/createuser" . No login required 
router.post('/createUser',
    body('email', 'enter a valid email').isEmail(),
    body('password', 'enter a valid password').isLength({ min: 5 }),
    async (req, res) => {
        let success = false
        // if there are errors return bad request and errors 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // check whether the user with this email exist already 
        const {name,email,password}=req.body
        let user = await User.findOne({ email: email })
        if (user) {
            return res.status(400).json({ error: "sorry user with same email already exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        user = await User.create({
            name: name,
            email: email,
            password: secPass,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        // console.log(user)
        const token = jwt.sign(data, privateKey);
        success = true
        res.json({success, token })
    })
    // login a user using: POST "api/auth/login" .login required 
    router.post('/login',
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password should not be empty').exists(),
    async(req,res)=>{
        let success = false
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {email,password}=req.body
        try {
            const user = await User.findOne({email});
            if(!user){
                return res.status(400).json({error:"please enter valid credentials"})
            }
            const passwordCompare = await bcrypt.compare(password,user.password);
            if(!passwordCompare){
                return res.status(400).json({error:"please enter valid credentials"})
            }
            const data ={
                user:{
                    id: user.id
                }
            }
            const token = jwt.sign(data, privateKey);
            success = true;
            res.json({success,token})
        } catch (error) {
            console.log(error.message)
            res.status(500).send("internal server error")
        }
    })
    router.post('/getuser',fetchUser, async(req,res)=>{
        try {
            const userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
        } catch (error) {
            console.log(error.message)
            res.status(500).send("internal server error")
        }
        
    })
module.exports = router