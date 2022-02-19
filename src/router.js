const fs = require ('fs');
const path = require('path');
const {publicHandle, productHandle} =require('./handler/publicHandle')

const router = (request, response) => {
    const {url} = request;
    if(url === '/'){
        publicHandle(response, 'index.html');
    }
    else if(url === '/css/style.css' 
    || url === '/js/xhr.js' 
    || url === '/js/dom.js'){
        publicHandle(response, url);
    }else if(url === '/search'){
        productHandle(response, url)
    } else {
        // response.writeHead(404);
        // response.end('PAGE NOT FOUND')
        publicHandle(response, '/html/404.html');
    }
}

module.exports = router;