const Mongoose = require('mongoose');
//const con = Mongoose.createConnection();
const Url = "mongodb://localhost:27017/userLogin";

 
// const insertData=()=>{
// Mongoose.connect(Url, function(err, db) {  
//     if (err) throw err;  
//     var myobj = ({ name: "Ajeet Kumar", age: "28", sex: "Male", phone:"9586250432", username:"ajeetkumar@gmail.com", password:"ajeet1" });  
//     db.collection("userData").insert(myobj, function(err, res) {  
//         if (err) throw err;  
//         console.log("Number of records inserted: " + res.insertedCount);  
//         db.close();  
//         });  
// });
// };

 exports.findAllData=()=>{
     
    Mongoose.connect(Url, function(err, db) {  
        if (err) throw err;  
         
        db.collection("userData").find({}).toArray((err, result) =>{  
            if (err) throw err;  
           
          
            console.log(result);  
            db.close();  
           exports.result;
    });
    });
    
}

   exports.findOneData=( searchData)=>{
        Mongoose.connect(Url, function(err, db) {  
            if (err) throw err;  
             
            db.collection("userData").find({username:searchData}).toArray((err, result) =>{  
                if (err) throw err;  
                MongoData=result;
                console.log(MongoData);  
                db.close();  
                });  
        });
        }


        //module.exports=findAllData,findOneData;