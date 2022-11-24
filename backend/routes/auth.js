const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { json } = require('express');

const privateKey = "DhruwangIsABillionare"


// create a user using: POST "api/auth/createuser" . No login required 
router.post('/createUser',
    body('email', 'enter a valid email').isEmail(),
    body('password', 'enter a valid password').isLength({ min: 5 }),
    async (req, res) => {
        // if there are errors return bad request and errors 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // check whether the user with this email exist already 
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "sorry user with same email already exist" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        // console.log(user)
        const token = jwt.sign(data, privateKey);

        res.json({ token })
    })
    // login a user using: POST "api/auth/login" . No login required 
    router.post('/login',
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password should not be empty').exists(),
    async(req,res)=>{
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
            res.json({token})
        } catch (error) {
            console.log(error.message)
            res.status(500).send("internal server error")
        }
    })
module.exports = router