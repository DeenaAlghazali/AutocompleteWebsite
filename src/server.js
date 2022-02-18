const http = require ('http');
const router = require ('./router');
const server =http.createServer(router);
const PORT = 8080;
server.listen (PORT,()=>{
    console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`);
});