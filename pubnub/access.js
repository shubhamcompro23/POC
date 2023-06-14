const PubNub = require('pubnub');

const pubnub = new PubNub({
    publishKey: "pub-c-b602ba70-fc8f-4c45-81d0-60b8f7f1d50d",
    subscribeKey: "sub-c-4655fd78-9952-48c1-9141-8e98fdcad7d0",
    secretKey: "sec-c-ZGM4NWIxYmEtMWJjYi00MjBmLTgxNzgtYTk0YTMyMzYxNzc5",
    // authKey: ["authorizationkey111"],
    userId: "zxcvbnm111"
});

async function grant (){
    try {
        // const token = await pubnub.grantToken({
        //     ttl: 30,
        //     authorized_uuid: "zxcvbnm201",
        //     authKey: ["authorizationkey111"],
        //     resources: {
        //         channels: {
        //             "a": {
        //                 "read":true,
        //                 "write":true,

        //             },
        //         },
        //     },
        // });

        const token = await pubnub.grant({
            channels: ['a'],
            read: true, 
            write: true,
            // uuids:["zxcvbnm201"] ,
            authKeys: ["authorizationkey"],
            ttl: 30
        })
        

        // const data = await pubnub.parseToken(token)

        // console.log("grantToken", JSON.stringify(data, 0 , 2))

        console.log("grantToken", token)
    } catch (status) {
        console.log(status);
    }
}

grant()