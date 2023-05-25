const PubNub = require('pubnub');

const pubnub = new PubNub({
    publishKey: "pub-c-def4fcc9-5629-40d5-bb8e-cd6483fa0eb8",
    subscribeKey: "sub-c-bd011fd5-e101-4263-9ea6-14cc70db2472",
    userId: "myuserid4",
    authKey: "my-authorized-uuid101",
    secretKey: "sec-c-MzY4NzZjOTgtNzRmOC00ZGJlLWE4ZmEtNmY1MGY3NGFhMjA4",
});


// add listener
const listener = {
    status: (statusEvent) => {
        if (statusEvent.category === "PNConnectedCategory") {
            console.log("Connected");
        }
    },
    message: (messageEvent) => {
        showMessage(messageEvent.message.description);
    },
    presence: (presenceEvent) => {
        // handle presence
    }
};
pubnub.addListener(listener);


// subscribe to a channel
pubnub.subscribe({
    channels: ["grant"],
});

const showMessage = (msg) => {
    console.log("message: " + msg);
}