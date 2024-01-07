const http = require('http');


const Server = http.createServer((req, res) =>{
    console.log(req.url, req.method);



    //seting header con typ

    res.setHeader('content-Type', 'text/html');

    res.write('<h1>Hello Node!!!!</h1>');
    res.end();
});

Server.listen(3000, 'localhost', () =>{
    console.log('listening for requestes for 3000')
})