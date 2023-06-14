const PubNub = require('pubnub');

const pubnub = new PubNub({
  publishKey: "pub-c-b602ba70-fc8f-4c45-81d0-60b8f7f1d50d",
  subscribeKey: "sub-c-4655fd78-9952-48c1-9141-8e98fdcad7d0",
  authKey: ["authorizationkey111"],
  userId: "zxcvbnm201"
});

// publish message
const publishMessage = async (options) => {
    const args = options.split(":");
    const channel = args[0]
    const message = args[1]

    await pubnub.publish({
      channel,
      message: {
        title: "greeting",
        description: message,
      },
    });
}
 

// built-in package for reading from stdin
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.setPrompt("");
readline.prompt();
// publish after hitting return
readline.on('line', (message) => {
    publishMessage(message).then(() => {
        readline.prompt();
    });
});





