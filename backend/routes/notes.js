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

// endpoint to add notes. login required 
router.post('/addnotes', fetchUser, [
    body('title',"enter a valid title").isLength({min:3}),
    body('description',"enter a valid description").isLength({min:5})
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
// endpoint to update existing node  
router.put('/updatenote/:id', fetchUser,async (req, res) => {
    try { 
        const{title,description,tag} = req.body
        // creating a new note object 
        let newNote = {}
        if(title){newNote.title=title}
        if(description){newNote.description=description}
        if(tag){newNote.tag=tag}

        // finding note to update 
        let note = await Notes.findById(req.params.id);
        if(!note){return res.status(404).send("note not found")}

        if(note.user.toString() !== req.user.id){
            return res.status(401).send('not allowed')
        }
        note = await Notes.findByIdAndUpdate(req.params.id,{$set : newNote},{new:true})
        res.json({newNote})
        }
        
     catch (error) {
        console.log(error.message)
        res.status(401).json({ err: "internal server error" })
    }
})
// endpoint to delete an existing node  
router.delete('/deletenode/:id', fetchUser,async (req, res) => {
    try { 
        // finding note to update 
        let note = await Notes.findById(req.params.id);
        if(!note){return res.status(404).send("note not found")}

        if(note.user.toString() !== req.user.id){
            return res.status(401).send('not allowed')
        }
        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({"Success":"node deleted",note:note})
        }
        
     catch (error) {
        console.log(error.message)
        res.status(500).json({ err: "internal server error" })
    }
})
module.exports = router

