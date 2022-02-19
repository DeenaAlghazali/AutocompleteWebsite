const fs = require ('fs');
const path = require ('path');
const contentType = {
    html : 'text/html',
    css : 'text/css',
    js : 'text/javascript',
}
const publicHandle =(response , endPoint)=> {
    const extension = endPoint.split('.')[1];
    const filePath = path.join(__dirname, '..','..', 'public', endPoint)
    fs.readFile (filePath, (error,data)=> {
        if(error){
            response.writeHead(500)
            response.end('SERVER ERROR')
        }
        else {
            response.writeHead(200 , {'content-Type': contentType[extension]});
            response.end(data);
        }
    })
}
const productHandle =(response , endPoint)=> {
    const extension = endPoint.split('.')[1];
    const filePath = path.join(__dirname, '..','product.json')
    fs.readFile (filePath, (error,data)=> {
        if(error){
            response.writeHead(500)
            response.end('SERVER ERROR')
        }
        else {
            response.writeHead(200 , {'content-Type': contentType[extension]});
            response.end(data);
        }
    })
}

module.exports ={publicHandle , productHandle};