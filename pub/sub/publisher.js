const redis = require('redis');

const port = 6379
const publisher = redis.createClient(port);
publisher.on('connect', () => console.log('connect to redis server'));

(async () => {

  const article22 = {
    id: '1',
    name: 'Using Redis Pub/Sub with Node.js',
    blog: 'Logrocket Blog',
  };

  await publisher.connect();

  const publish = await publisher.publish('article22', JSON.stringify(article22));
  console.log("publish--", publish)
})();