/* var http = require('http');

http.createServer(function (req, res)
{
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('TALUT LE MONDE')
}).listen(8081, '127.0.0.1');


console.log('Server running at http://127.0.0.1:8081/'); */

//c
var http = require("http"); //IMPORTE LE MODULE SERVEUR HTTP
var fs = require('fs');
var obj;
var returnProvince;
var oProvince;
var returnEtat;
var oEtat;



var etatsOuProvinces = "etats";
fs.readFile(etatsOuProvinces +'.json','utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  returnEtatOuProvince = affiche_objet(obj);

});







function affiche_objet(monObjet, etatsOuProvinces)
{
	if(etatsOuProvinces = "provinces")
	{
		var uneProvince="";
		for(propriete in monObjet)
			{
				uneProvince += '<tr>'+'<td>' + propriete + '</td>' +  '<td>' + monObjet[propriete] +'</td>'+ '</tr>';
			}
		return uneProvince;
	}

	if(etatsOuProvinces = "etats")
	{
		var unEtat="";
		for(propriete in monObjet)
			{
				unEtat += '<tr>'+'<td>' + propriete + '</td>' +  '<td>' + monObjet[propriete] +'</td>'+ '</tr>';
			}
		return unEtat;
	}
	
}



http.createServer(function(request, response) {

	console.log(request.url);
 if (request.method === 'GET' && request.url === '/provinces')
 {

	 response.writeHead(200, {"Content-Type": "text/html"});
	 response.write("<h1>CANADUH</h1>");
	 response.write("<table>" + returnProvince + "</table>")
 }

 
if (request.method === 'GET' && request.url === '/etats')
{ 
	 response.writeHead(200, {"Content-Type": "text/html"});
	 response.write("<h1>USA</h1>");
	 console.log(unEtat);
	 response.write("<table>" + returnEtat + "</table>")
}
  response.end();
}).listen(8081, '127.0.0.1');