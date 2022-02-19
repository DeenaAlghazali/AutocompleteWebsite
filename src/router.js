const fs = require ('fs');
const path = require('path');
const publicHandle =require('./handler/publicHandle')

const router = (request, response) => {
    const url = request.url;
    if(url === '/'){
        publicHandle(response, 'index.html');
    }else if(url === '/css/style.css'){
        publicHandle(response, url);
    }
}

module.exports = router;