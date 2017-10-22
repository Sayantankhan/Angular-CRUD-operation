// routing.js
// ==============================================

//require for the routing purpose
var express = require('express');
var app     = express();
//require for the setting port
var port    = process.env.PORT || 8082;   //Fixing the environment port
var path    = require('path');
//require the body-parser nodejs module
var bodyParser = require('body-parser');
//require for handling errors
var errorHandler = require('express-error-handler');
// ==============================================

//it is use to run routes in the system
// When we do app.get('/user', function(req, res) { ... });,
//it is the router that actually invokes the callback function to process the request.
//app.use(app.router);  --it is now deprecated

//it is used for loading static page i.e static css,js files into system
app.use(express.static(__dirname));
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//support parsing of application/json type post data
app.use(bodyParser.json());

//==========================================================
//using for every get and post request
app.get('/', function(req, res) {
    console.log(__dirname);
      //we can use app.get  or app.post accordingly
     // Use res.sendfile, as it streams instead of reading the file into memory.
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/validateData',function(req,res){
    //This portion is used for javascript framework http request where for body key-value pair
    // key is the value that we send
    //value is '' or null
      try{
        req.body = JSON.parse(Object.keys(req.body)[0]);
      }catch(err){
        req.body = req.body;
      }

      console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
      var email = req.body.email || null; //setting the value if find else set it to null
      var password = req.body.password || null; //setting the value if find else set it to null

      console.log(req.body);
      console.log(req.body.email);
});

// START THE SERVER
// =========================================================
app.listen(port);
console.log('Magic happens on port ' + port);
