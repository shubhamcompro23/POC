const redis = require('redis');

(async () => {
  const port = 6379
  const client = redis.createClient(port);

  const subscriber = client.duplicate();

  await subscriber.connect();

  await subscriber.subscribe('article22', (message) => {
    console.log("message----",JSON.parse(message)); // 'message'
  });

})();