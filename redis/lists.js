const { createClient } = require('redis');
const port = 6379
const client = createClient(port);
client.connect();
client.on('connect', () => console.log('connect to redis server'));

(async() =>{
    await client.RPUSH('key', ['name: shubham saini', 'age: 27', "profession: SDE", "popfield"]);
    await client.LPUSH('key', ["userId: 1"]);
    await client.LINSERT('key', "BEFORE", "userId: 1", "User Details----");
    await client.LTRIM('key', 0 ,4 );

    console.log("Length---", await client.lLen("key"))
    console.log("lindex---", await client.lIndex("key", 0))
    console.log("lrange---", await client.LRANGE("key", 0, -1))
    console.log("rPop---", await client.rPop("key"))
    console.log("lPop---", await client.lPop("key"))
    console.log("EXISTS---", await client.EXISTS("key"))
    console.log("EXISTS---", await client.EXISTS("nonkey"))


    //Delete list
    await client.LPUSH('key1', ["userId: 1"]);
    await client.DEL('key1', ["userId: 1"]);
    console.log("lrange---", await client.LRANGE("key1", 0, -1))
})()