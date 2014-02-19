var http = require("http");
var url = require("url");

http.createServer(function(request, response) {

     response.writeHead(200, {"Content-Type": "text/plain"});

     var params = url.parse(request.url, true).query;
     var input = params.n;

     var numInput = new Number(input);
     var output = "";


     for(var i = 1; i<=numInput; i++) {
          //output += i+" : ";
          if(i%3==0) {
               output += "TR\n";
          } else if(i%7==0) {
               output += "SV\n";
          } else {
               output += "TRSV\n";
          }
     }

     response.write(output);
     response.end();

}).listen(3000);

console.log("Print the Numbers Generator Running...");