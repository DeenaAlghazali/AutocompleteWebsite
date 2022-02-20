const https = require('https');

const getAllProductHandle =(response)=> {
 https.get('https://fakestoreapi.com/products/',(res)=>{
    let allData = "";
    res.on('data', (chunkOfData)=>{
        allData += chunkOfData;
    })
    res.on('end', () => {
        response.writeHead(200);
        response.end (allData);
    })
 })
};
module.exports = getAllProductHandle;