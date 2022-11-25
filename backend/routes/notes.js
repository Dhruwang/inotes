const express = require('express')
const fetchUser = require('../middleware/fetchUser')
const Notes = require('../models/Notes')
const router = express.Router()
const { body, validationResult } = require('express-validator');

router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        res.status(401).json({ err: "internal server error" })
    }

})

router.post('/addnotes', fetchUser, [
    body('title',"enter a valid title").isLength({min:3}),
    body('description',"enter a valid description").isLength({min:3})
],
 async (req, res) => {
    try { 
        const {title, description, tags} = req.body

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        
        const note = new Notes({
            title, description, tags,user:req.user.id
        })
        const savednote = await note.save()
        res.json(savednote)
    } catch (error) {
        console.log(error.message)
        res.status(401).json({ err: "internal server error" })
    }
})

module.exports = router

