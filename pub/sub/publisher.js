const redis = require('redis');
const port = 6379
const publisher = redis.createClient(port);
publisher.on('connect', () => console.log('connect to redis server'));

(async () => {

  const article = {
    id: '1',
    name: 'Using Redis Pub/Sub with Node.js',
    blog: 'Logrocket Blog',
  };

  await publisher.connect();

  const publish1 = await publisher.publish('article', JSON.stringify(article));
  const publish2 = await publisher.publish('second', "This article publish second channel");
  console.log({
    "publish1": publish1,
    "publish2": publish2
  })
})();