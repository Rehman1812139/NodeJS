var express=require('express')
var R1=require('./Router')
var app=express()

app.route('/books')
.get((req,res)=>{
res.send("Retrieve all books")

})

.post((req,res)=>{
    res.send("Add a book")
})

.put((req,res)=>{
 res.send("Update a book")   
})

.delete((req,res)=>{
 res.send("Delete a book")   
})
//http://localhost:3000/Student
app.use('/Student',R1)
var server=app.listen(3000,()=>{
    console.log("Server is at port 3000")
})
