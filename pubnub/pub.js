const PubNub = require('pubnub');

const pubnub = new PubNub({
  publishKey: "pub-c-def4fcc9-5629-40d5-bb8e-cd6483fa0eb8",
  subscribeKey: "sub-c-bd011fd5-e101-4263-9ea6-14cc70db2472",
  userId: "myuserid1",
  authKey: "my-authorized-uuid101",
  secretKey: "sec-c-MzY4NzZjOTgtNzRmOC00ZGJlLWE4ZmEtNmY1MGY3NGFhMjA4",
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





