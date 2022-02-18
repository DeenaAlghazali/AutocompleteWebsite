const fs = require ('fs');
const path = require('path');
const homeHandle = require("./handler/homeHandle");

const router = (request, response) => {
    const url = request.url;
    if(url === '/'){
        homeHandle(response);
    }
}

module.exports = router;