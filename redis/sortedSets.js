const { createClient } = require('redis');
const port = 6379
const client = createClient(port);
client.connect();
client.on('connect', () => console.log('connect to redis server'));

(async() =>{

    console.log(
        await client.zAdd('scoreboard', [{
          score: 10,
          value: 'user:1'
        }, {
          score: 2,
          value: 'user:2'
        },{
            score: 55,
            value: 'user:3'
        },{
            score: 65,
            value: 'user:4'
        }])
      );

    console.log(await client.ZRANGE("scoreboard",0,100,["SCORE", "REV"]))

    console.log("Total member in a set",await client.ZCARD('scoreboard',))
    console.log("member in a set b/w range",await client.ZCOUNT('scoreboard',50,100))
    console.log("increby",await client.ZINCRBY('scoreboard',10,"user:2"))
    console.log("score--",await client.ZSCORE('scoreboard',"user:1"))
    console.log("ZRANK",await client.ZRANK('scoreboard',"user:3"))


    //console.log("zInter",await client.SINTER(["scoreboard", "livescore"]))
    console.log("remove",await client.ZREM("scoreboard","user:1"))


})()