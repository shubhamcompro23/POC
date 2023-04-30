const redis = require('redis');

(async () => {
  const port = 6379
  const client = redis.createClient(port);

  await client.connect();

  await client.configSet("notify-keyspace-events", "KEh");
  console.log("configget",await client.configGet("notify-keyspace-events"))

  const subscriber=client.duplicate();
  subscriber.connect();

  // await subscriber.subscribe("__keyspace@0__:foo", (message) => {
  //   console.log("message----",message);
  // });

  await subscriber.PSUBSCRIBE("__key*__:*", (message) => {
    console.log("message----",message);
  });

  // await client.set('foo', 'value is 10');
  // const value = await client.get('key');

  await client.setEx("foo", 5 , "this key is delete after 5 sec")
  await client.hSet('user', 'username', 'shubham saini', "age", 27);
  await client.HSET("user","age",20 )
  await client.HSET("user","profession", "Developer" )
  console.log(await client.hGetAll('user'))

})();


