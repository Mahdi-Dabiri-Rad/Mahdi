let http= require ('http');
let port = (80);
let server = http.createServer(requestHandler);
server.listen(port);
console.log("server is running on port"+port);
let headers ={'Content-Type':'Text/plane'};

let obj={
x:function(response){
console.log('montazeri')
response.writeHead(200,headers);
response.write("name daneshgah:");

},
y:function(response){
    console.log('mahdi')
    response.writeHead(200,headers);
    response.write("name daneshgah:");


},
"favicon.ico": function(){
console.log('favicon')

}
}

function requestHandler(request,response){
let firstpart= request.url.split('/')[1];

obj [firstpart](response);

response.writeHead(200,headers);
response.write("hi");
response.end();


}