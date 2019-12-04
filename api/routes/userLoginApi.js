var express = require('express');
var router = express.Router();
//const findAllData = require('../../dbConnection/userLogDetails/userlog');
const Mongoose = require('mongoose');
//const con = Mongoose.createConnection();
const Url = "mongodb://localhost:27017/userLogin";

//router.use(express.static('public'));


 router.get('/', function (req, res) { 
    
    Mongoose.connect(Url, function(err, db) {  
      if (err) throw err;  
      db.collection("userData").find({}).toArray((err, result) =>{  
          if (err) throw err;  
         res.send(result);  
          console.log(result);  
          db.close();  
  });
  });
   
 });

 router.post('/search-user', function (req, res) { 
   const nameData=req.body.username; 
   console.log(req.body.username);
   Mongoose.connect(Url, function(err, db) {  
     if (err) throw err;  
     db.collection("userData").find({username:nameData}).toArray((err, result) =>{  
         if (err) throw err;  
        res.send(result);  
         console.log(result);  
         db.close();  
 });
 });
  
});

 router.post('/',  (req, res, next)=> { 
   
    const nameData={name:req.body.name,
                   age:req.body.age,
                   gender:req.body.gender,
                   phone:req.body.phone,
                   username:req.body.username,
                   password:req.body.password
                   }; 
   console.log(nameData);
   //nameData=JSON.parse(nameData);
   Mongoose.connect(Url, function(err, db) {  
     if (err) throw err;  
     db.collection("userData").insert(nameData, function(err, result){  
         if (err) throw err;  
         res.status(201).json({
          message:'Handling post data',
          name:result
        // createProdect:
       
      }); 
         console.log(result);  
         db.close();  
 });
 });
  
}); 
module.exports=router;


