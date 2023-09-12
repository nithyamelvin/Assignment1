const express = require('express'); 
const app=express();

const PORT = process.env.PORT || 3000;


app.get("/", (req,res)=>{

    res.render("user");
    
});

app.get("/user/register",(req,res)=>{

    res.render("register");
    
}
);

app.get("/user/login",(req,res)=>{

    res.render("login");
    
}
);

app.listen(PORT, () =>{

    console.log('Server running on port : ${PORT}');
});












app.post("/", function(req,res)
{
let newUser= new User
({
UserID: req.body.UserID,
Password: req.body.Password,
});

newUser.save();
//res.send("Book added to the Database");
res.redirect("/");
})

app.listen(8080,function()
{
    console.log("server is running");
});
