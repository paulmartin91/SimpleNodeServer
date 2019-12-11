//import library for http requests
const http = require('http')
//import library for file handling 
const fs = require('fs')
//define the port being used
const port = 3005

//this function handles requests to the server
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html'})
    fs.readFile('index.html', (error, data)=>{
        if (error) { 
        res.writeHead(404)
        req.write('ERROR: file not found')
        } else { 
        res.write(data)
        }
        res.end()
    })
})

//add event listener for server requests 
server.listen(port, (error)=>{ 
    error ? 
        console.log(`Something went wrong ${error}`) 
        : 
        console.log(`Server is listening on port ${port}`)
})

