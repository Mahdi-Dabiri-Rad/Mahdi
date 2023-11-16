let http= require ('http');
let fs= require ('fs');

let port = (8090);
let server = http.createServer(requestHandler);
server.listen(port);
console.log("server is running on port"+port);
let headers ={'Content-Type':'Text/plane'};
let headers_html ={'Content-Type':'Text/html'};
let obj={
home:function(response){
    console.log('mahdi')
    fs.readFile("./6.html",function(error , data){
        if (error) {
            console.log('we have error to load file');
        } else {
            response.writeHead(200,headers_html);
            response.write(data);
            response.end();

        }
    });


}

}

function requestHandler(request,response){
let firstpart= request.url.split('/')[1];
console.log('sss',firstpart);
if(firstpart !== 'favicon.ico'){
    obj[firstpart](response);
}




}