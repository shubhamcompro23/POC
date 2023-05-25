const PubNub = require('pubnub');

const pubnub = new PubNub({
  publishKey: "pub-c-def4fcc9-5629-40d5-bb8e-cd6483fa0eb8",
  subscribeKey: "sub-c-bd011fd5-e101-4263-9ea6-14cc70db2472",
  secretKey: "sec-c-MzY4NzZjOTgtNzRmOC00ZGJlLWE4ZmEtNmY1MGY3NGFhMjA4",
  userId: "myuserid1"
});

async function grant (){
    try {
        const token = await pubnub.grantToken({
            ttl: 30,
            authorized_uuid: "my-authorized-uuid101",
            resources: {
                channels: {
                    "grant": {
                        "read":true,
                        "write":true,

                    },
                },
            },
        });
        

        const data = await pubnub.parseToken(token)

        console.log("grantToken", JSON.stringify(data, 0 , 2))

        console.log("grantToken", token)
    } catch (status) {
        console.log(status);
    }
}

grant()