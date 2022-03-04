const express = require("express");
const bodyParser = require("body-parser"); 
const  ejs =require("ejs");

 var user;
 var year;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


  app.get("/",function(req,res){
     res.render("home");
    // res.sendFile(__dirname + "/home.html");
  });
  
  app.post("/",function(req,res){
       user=req.body.name;
       year=req.body.year;

  
     res.redirect("/gameList");
  });

app.post("/snakeGame",function(req,res){
  res.redirect("/gameList");
});
app.post("/virusGame",function(req,res){
  res.redirect("/gameList");
});
app.post("/sudukoSolver",function(req,res){
  res.redirect("/gameList");
});

 app.get("/gameList",function(req,res){
    res.render("gameList",{username:user,dob:year});
  // res.render("")
   // res.sendFile(__dirname + "/gameList.html");
  });

  app.get("/sudukoSolver",function(req,res){
    res.render("suduko");
  });
  app.get("/snakeGame",function(req,res){
    res.render("snake");
  });
  app.get("/virusGame",function(req,res){
    res.render("virusgame");
  });

// mongoose.connect("mongodb+srv://Hari2000:Hari2000@cluster0.7meav.mongodb.net/todolistDb",{useNewUrlParser:true}); 

//mongoose.connect("mongodb://localhost:27017/wikiDb");   //{useNewUrlParser:true}



app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
