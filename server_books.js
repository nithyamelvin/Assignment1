const express = require('express'); 
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");

mongoose.connect("mongodb+srv://user:test123@cluster0.po1bjxq.mongodb.net/Library", { useNewUrlParser: true}, {useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: true }));


const BooksSchema = {  
Title:String,
Description:String,
Author:String,
Release_Year:Number,
Genre:String
}   

const Books= mongoose.model("books", BooksSchema);


app.get("/", function(req,res)
{
    res.sendFile(__dirname+"/index.html");
    
}

)

app.post("/", function(req,res)
{
let newBook= new Books
({
Title: req.body.title,
Description: req.body.description,
Author: req.body.author,
Release_Year: req.body.rel_year,
Genre: req.body.genre
});

newBook.save();
//res.send("Book added to the Database");
res.redirect("/");
})

app.listen(8080,function()
{
    console.log("server is running");
});
