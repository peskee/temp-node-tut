const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Welcome to our home page');
        res.end()
    }
    else if (req.url === '/about'){
        res.end('Here is our short history')
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page that you're looking for</p>
        <a href = "/">back home</a>`
        )
    } 
})

server.listen(5000)
