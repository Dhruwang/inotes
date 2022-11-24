const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

// create a user using: POST "api/auth/createuser" . No login required 
router.post('/createUser',
    body('email','enter a valid email').isEmail(),
    body('password','enter a valid password').isLength({ min: 5 }),
    async(req, res) => {
        // if there are errors return bad request and errors 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // check whether the user with this email exist already 
        let user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({error:"sorry user with same email already exist"})
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        
        res.json(user)
    })
module.exports = router