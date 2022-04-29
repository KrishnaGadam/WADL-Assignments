const express=require("express");
const app=express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signin.html");
});
app.get("/Home",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    res.redirect("/Home");
});
app.listen(3000,function(){
    console.log("server is running");
});
app.post("/request", (req, res) => {
    
    console.log(req.body);
    
    
 })


























 // res.json([{
    //    name_recieved: req.body.name,
    //    designation_recieved: req.body.designation
    // }])