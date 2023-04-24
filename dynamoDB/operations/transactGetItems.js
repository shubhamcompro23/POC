const { DynamoDBClient, TransactGetItemsCommand } = require("@aws-sdk/client-dynamodb");

// Set the AWS Region.
const REGION = "local";

// Create an Amazon DynamoDB service client object.
const DB = new DynamoDBClient({ region: REGION });

// Set the parameters.

const params = { 
    TransactItems: [ 
      { 
        Get: { 
          Key: { 
            "Season": {
              N: "1",
            },
            "Episode": {
                N: "1"
            }
          },
          TableName: "TEST_TABLE",
        },
      },
      { 
        Get: { 
          Key: { 
            "Season": {
              N: "1",
            },
            "Episode": {
                N: "2"
            }
          },
          TableName: "TEST_TABLE",
        },
      },
    ],
};


const run = async () => {
    try {
      const data = await DB.send(new TransactGetItemsCommand(params));
      console.log("Success Data", data.Responses);
    } catch (err) {
      console.log("Error", err.stack);
    }
};


run();