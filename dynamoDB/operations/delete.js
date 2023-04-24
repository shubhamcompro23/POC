const { DynamoDBClient, DeleteItemCommand } = require("@aws-sdk/client-dynamodb");

// Set the AWS Region.
const REGION = "local";

// Create an Amazon DynamoDB service client object.
const DB = new DynamoDBClient({ region: REGION });

// Set the parameters.
const params = {
    "TableName": "TEST_TABLE",
    "Key": {
        "Season": {
          "N": "3"
        },
        "Episode": {
          "N": "3"
        }
    }
};


const deleteOperation = async () => {
    try {
      const data = await DB.send(new DeleteItemCommand(params));
      console.log("Data Deleted Successfully", data);
    } catch (err) {
      console.log("Error", err.stack);
    }
};


deleteOperation();