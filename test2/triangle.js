//nodeJS restFull
//usage: http://localhost:3000/silveiracamilo/mobiitest/test2?n=200

var http = require("http");
var url = require("url");

http.createServer(function(request, response) {

     response.writeHead(200, {"Content-Type": "text/plain"});

     var params = url.parse(request.url, true).query;
     var input = params.n;

     var numInput = new Number(input);
     var output = "";
     var n = numInput;
     var tris = [];

     for(var i=1; i<=n; i++){
     	if(isTriangular(i) && i%2==0){
     		output += "triangle: "+i+"\n";
     		tris.push(i);
     	}

     	if(tris.length>5)
     		break;
     }

     response.write(output);
     response.end();

}).listen(3000);

function isTriangular(n)
{
    n42 = Math.round(Math.sqrt(n * 2));
    return (n42 * (n42 + 1)) == n * 2;
}

console.log("Print the Numbers Generator Running...");