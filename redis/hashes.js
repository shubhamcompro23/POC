const { createClient } = require('redis');
const port = 6379
const client = createClient(port);
client.connect();
client.on('connect', () => console.log('connect to redis server'));

(async() =>{
    await client.hSet('user', "username", 'shubham saini');
    await client.HSET("user","age",20 )
    await client.HSET("user","profession", "Developer" )
    await client.HINCRBY("user","age",7 )

    await client.HSET("user","delkey", "delete command" )
    
    console.log("hget",await client.hGet('user','username'))
    console.log("hexits",await client.hExists('user',"username"))

    console.log("hgetAll",await client.hGetAll('user'))
    await client.HDEL("user","delkey")
    console.log("user after hdel",await client.hGetAll('user'))
    console.log("All field in hash",await client.hKeys('user'))
    console.log("length of hash",await client.hLen('user'))
    console.log("value of fields in hash",await client.hmGet('user', ["username", "age","profession"]))
    console.log("value of all fields in hash",await client.hVals('user'))
    //console.log("length of value of field",await client.HSTRLEN('user',"username"))
    // await client.hSet('user-session:123', {
    //     name: 'John',
    //     surname: 'Smith',
    //     company: 'Redis',
    //     age: 29
    // })
    // console.log(await client.hGetAll('user-session:123'))

    
})()