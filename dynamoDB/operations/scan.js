// //const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");

// // Set the AWS Region.
// const REGION = "local";

// // Create an Amazon DynamoDB service client object.
// const DB = new DynamoDBClient({ region: REGION });


// Set the parameters.
// const params = {
//     "TableName": "TEST_TABLE",
//     // "KeyConditionExpression": "Season = :Season",
//     "ExpressionAttributeValues": { ":Season": { "N": "5"  }},
//     "FilterExpression": "Season = :Season",
//     // "ProjectionExpression": "Season,Episode",
// };


// const scan = async () => {
//     try {
//       const data = await DB.send(new ScanCommand(params));
//       console.log("Success Data", data.Items);
//     } catch (err) {
//       console.log("Error", err.stack);
//     }
// };

//scan()



const AWS = require("aws-sdk");


AWS.config.update({
  region: "local",
  endpoint: "http://localhost:8000"
});


const dynamodb = new AWS.DynamoDB();

// Set the parameters.
const params = {
  "TableName": "TEST_TABLE",
  // "KeyConditionExpression": "Season = :Season",
  "ExpressionAttributeValues": { ":Season": { "N": "5"  }},
  "FilterExpression": "Season = :Season",
  // "ProjectionExpression": "Season,Episode",
};



dynamodb.scan(params, function(err, data) {
  if (err) {
      console.error("Error JSON.", JSON.stringify(err, null, 2));
  } else {
      console.log("Data-", data.Items);
  }
});
