const fs = require ('fs');
const path = require ('path');

const productHandle =(response)=> {
    const filePath = path.join(__dirname, '..','products.json')
    fs.readFile (filePath, (error,data)=> {
        if(error){
            console.log(error)
            response.writeHead(500);
            response.end('SERVER ERROR');
        }
        else {
            response.writeHead(200 , {'content-Type':'application/json' });
            response.end(data);
        }
    })
};
module.exports = productHandle;