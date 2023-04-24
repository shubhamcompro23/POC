const { DynamoDBClient, BatchGetItemCommand } = require("@aws-sdk/client-dynamodb");

// Set the AWS Region.
const REGION = "local";

// Create an Amazon DynamoDB service client object.
const DB = new DynamoDBClient({ region: REGION });

// Set the parameters.
const params = {
    "RequestItems": {
      "TEST_TABLE": {
        "Keys": [
          {
            "Season": {
              "N": "1"
            },
            "Episode": {
              "N": "1"
            }
          },
          {
            "Season": {
              "N": "2"
            },
            "Episode": {
              "N": "1"
            }
          },
          {
            "Season": {
              "N": "3"
            },
            "Episode": {
              "N": "3"
            }
          },
        ],
        // "ProjectionExpression": "Season"
      }
    }
};


const batchGet = async () => {
    try {
      const data = await DB.send(new BatchGetItemCommand(params));
      console.log("Data -", data.Responses.TEST_TABLE);
    } catch (err) {
      console.log("Error", err.stack);
    }
};


batchGet();
