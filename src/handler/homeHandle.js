const fs = require ('fs');
const path = require ('path');

const homeHandle =(response)=> {
    const filePath = path.join(__dirname, '..','..', 'public', 'index.html')
    fs.readFile (filePath, (error,data)=> {
        if(error){
            response.writeHead(500)
            response.end('SERVER ERROR')
        }
        else {
            response.writeHead(200);
            response.end(data);
        }
    })
}
module.exports = homeHandle;