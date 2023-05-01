const { createClient } = require('redis');
const port = 6379
const client = createClient(port);
client.connect();
client.on('connect', () => console.log('connect to redis server'));

(async() =>{
    await client.SADD("mylist", ["IPHONE", "laptop"]);
    console.log("smembers",await client.SMEMBERS('mylist'))
    console.log("ismembers",await client.SISMEMBER('mylist',"laptop"))
})()