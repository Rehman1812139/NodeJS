var express=require('express')
var router=express.Router()

//http://localhost:3000/Student
router.get('/',(req,res)=>{
res.send('<h1>Home page<h1>')

})

router.get('/about',(req,res)=>{
    res.send('This is about page')
    
    })

module.exports=router
   