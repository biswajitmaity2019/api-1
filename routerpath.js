const express = require('express');  
const app = express();  
const bodyParser = require('body-parser');  
const Cors = require('cors');

const product=require('./api/routes/userLoginApi');

app.use(Cors());

// Create application/x-www-form-urlencoded parser  
app.use( bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/product', product);






// var server = app.listen(3000, function () {  
// var host = server.address().address  
//   var port = server.address().port  
//  console.log("Example app listening at http://%s:%s", host, port)  
// })  

module.exports=app;