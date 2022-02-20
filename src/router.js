const fs = require ('fs');
var qs = require('querystring');
const path = require('path');
const publicHandle = require('./handler/publicHandle');
const productHandle = require('./handler/productHandle');
const getAllProductHandle = require('./handler/getAllProductHandle');

const router = (request, response) => {
    const {url} = request;
    if(url === '/'){
        publicHandle(response, 'index.html');
    }
    else if(url === '/css/style.css' 
    || url === '/js/getAllProduct.js' 
    || url === '/js/dom.js'
    || url === '/css/error.css'){
        publicHandle(response,url);
    }else if(url === '/getAllProducts'){
        productHandle(response)
      }else if(url ==='/search'){
        //   if(request.method === "POST"){
            getAllProductHandle(response);
        // }
        // // console.log(request.method);
        // // console.log(request.body);
        // var body = '';
        // request.on('data', function (data) {
        //     body += data;
        // });

        // request.on('end', function () {
        //     // var post = qs.parse(body);
        //     // console.log('post', JSON.parse(body).data)
        //     const value = JSON.parse(body).data
        //     response.end(value)
        //     // use post['blah'], etc.
        // });
      } else {
        // response.writeHead(404);
        // response.end('PAGE NOT FOUND')
        publicHandle(response, '/html/404.html');
    }
}

module.exports = router;