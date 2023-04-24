// const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

// // Set the AWS Region.
// const REGION = "local";

// // Create an Amazon DynamoDB service client object.
// const DB = new DynamoDBClient({ region: REGION });


// // Set the parameters.
// const params = {
//     TableName: "TEST_TABLE",
//     Item: {
//       "Season": {N: "5"},
//       "Episode": {N: "1"},
//       "Description": {S: "Season Finale"}
//     },
// };

// const putItem = async () => {
//     try {
//       const data = await DB.send(new PutItemCommand(params));
//       console.log("Success - item added", data);
//     } catch (err) {
//       console.log("Error", err.stack);
//     }
// };


// putItem();


const AWS = require("aws-sdk")

AWS.config.update({
  region: "local",
  endpoint: "http://localhost:8000"
});


const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "TEST_TABLE",
  Item: {
    "Season": {N: "5"},
    "Episode": {N: "4"},
    "Description": {S: "This is new episode"},
    
  },
};

dynamodb.putItem(params,(err, data)=>{
  if (err) {
    console.error("Error JSON.", JSON.stringify(err, null, 2));
  } else {
    console.log("Data-", data);
  }
})