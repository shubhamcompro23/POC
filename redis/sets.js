const { createClient } = require('redis');
const port = 6379
const client = createClient(port);
client.connect();
client.on('connect', () => console.log('connect to redis server'));

(async() =>{
    await client.SADD("phones", ["iphone", "samsung", "redme"]);
    await client.SADD("laptop", ["dell", "asus", "hp", "macbook"]);
    await client.SPOP("laptop");
    console.log("smembers",await client.SMEMBERS('phones'))
    console.log("ismembers",await client.SISMEMBER('phones',"redme"))
    console.log("Total member in a set",await client.SCARD('laptop',))
    console.log("uniont",await client.SUNION(['laptop',"phones"]))




    await client.SADD("user:1:favorites", "55");
    await client.SADD("user:2:favorites", "56");
    await client.SADD("user:2:favorites", "55");
    await client.SADD("user:1:favorites", "56");
    await client.SADD("user:1:favorites", "20");

    console.log("sInter",await client.SINTER(["user:1:favorites","user:2:favorites"]))
    console.log("remove",await client.SREM("user:1:favorites", "20"))


})()