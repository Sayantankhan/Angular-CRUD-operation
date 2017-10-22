var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/sayantan";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Sarmistha", address: "Highway 37" };
  db.collection("chatserver").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
});
