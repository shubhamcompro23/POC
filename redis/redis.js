const { createClient } = require('redis');
const port = 6379
const client = createClient(port);

client.on('connect', () => console.log('connect to redis server'));


async function connect() {
    await client.connect();
}

connect()

async function setGetValue(key, params) {
    await client.set(key, params);
    await client.set("key2", "second test key");
    const value = await client.GET('key2');

    console.log("value",value)
}
setGetValue("key","This is my first key-value")

