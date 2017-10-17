var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
    var urlParse =  url.parse(req.url,true);
    var fileName = "."+urlParse.pathname;

    console.log(urlParse);
    console.log(fileName);

    fs.readFile(fileName,function(err,data){
      if(err){
        //if file not found
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      }
    // add a HTTP header:
    res.writeHead(200, {'Content-Type': 'text/html'});
    //write the content
    res.write(data);
    //response end
    res.end();
  });
}).listen(8082);
