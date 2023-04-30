const { createClient } = require('redis');
const port = 6379
const client = createClient(port);
client.connect();
client.on('connect', () => console.log('connect to redis server'));

(async() =>{
    // await client.set("username", "shubham saini");

    // console.log("getrange---", await client.GETRANGE("username", "0", "7"))
})()