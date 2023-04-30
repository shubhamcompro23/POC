const { createClient } = require('redis');
const port = 6379
const client = createClient(port);
client.connect();
client.on('connect', () => console.log('connect to redis server'));

(async() =>{
    await client.set("username", "shubham saini");
    await client.set("age", "25");
    await client.INCRBY("age", "15");
    await client.DECRBY("age", "5");
    await client.set("delkey", "want to execute delete command");

    await client.append("username", " is a software developer")
    await client.DEL("delkey")

    console.log(await client.mGet(["username" ,"age", "delkey"]))

    console.log("getrange---", await client.GETRANGE("username", "0", "7"))
})()


async function setEx() {
    // await client.connect();
    await client.setEx("foo", 10 , "this key will delete after 10 sec")
    console.log("foo ---",await client.get("foo"))

    setTimeout(async() => {
        console.log("foo after 10 sec ", await client.get("foo"))
    }, 11000);
}

setEx()

