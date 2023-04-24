const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb");

// Set the AWS Region.
const REGION = "local";

// Create an Amazon DynamoDB service client object.
const DB = new DynamoDBClient({ region: REGION });

// Set the parameters.
const params = {
    "TableName": "TEST_TABLE",
    "KeyConditionExpression": "Season = :Season",
    "ExpressionAttributeValues": { ":Season": { "N": "5"  }},
    // "TableName": "TEST_TABLE",
    // "ExpressionAttributeNames": {
    //     "#62250": "Season"
    //   },
    // "KeyConditionExpression": "#62250 = :62250",
    // "ExpressionAttributeValues": {
    //   ":62250": {
    //     "N": "1"
    //   }
    // }
};

const query = async () => {
    try {
      const data = await DB.send(new QueryCommand(params));
      console.log("Success Data", data.Items);
    } catch (err) {
      console.log("Error", err.stack);
    }
};


query();