const server = require('./app');
const PORT = 7070;

server.listen(PORT, ()=>{
    console.log(`Running on localhost ${PORT}`);
});