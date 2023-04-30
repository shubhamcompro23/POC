const redis = require('redis');

(async () => {
  const port = 6379
  const client = redis.createClient(port);

  const subscriber = client.duplicate();

  await subscriber.connect();

  await subscriber.subscribe('second', (message) => {
    console.log("message----",{message}); // 'message'
  });

})();