const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    obj={
        name:'Dhruwang',
        income :'10crore'
    }
    res.json(obj)
})
module.exports = router