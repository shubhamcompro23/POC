const PubNub = require('pubnub');

const pubnub = new PubNub({
    publishKey: "pub-c-b602ba70-fc8f-4c45-81d0-60b8f7f1d50d",
    subscribeKey: "sub-c-4655fd78-9952-48c1-9141-8e98fdcad7d0",
    authKey: ["authorizationkey11"],
    userId: "zxcvbnm30"
});


// add listener
const listener = {
    status: (statusEvent) => {
        if (statusEvent.category === "PNConnectedCategory") {
            console.log("Connected");
        }else{
            console.log("error----",JSON.stringify(statusEvent,0,2));
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
    channels: ["a"],
});

const showMessage = (msg) => {
    console.log("message: " + msg);
}