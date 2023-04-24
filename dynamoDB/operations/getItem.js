// const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

// // Set the AWS Region.
// const REGION = "local";

// // Create an Amazon DynamoDB service client object.
// const DB = new DynamoDBClient({ region: REGION });
// const params = {
//     TableName: "TEST_TABLE",
//     Key: {
//         Season: { N: 3 },
//         Episode: {N: 4}
//     },
//     // "ProjectionExpression": "Season, Episode",
// }
// const run = async () => {
//     const data = await DB.send(new GetItemCommand(params));
//     console.log("Success", data.Item);
//     return data;
    
//   };
//   run();

const AWS = require("aws-sdk")

AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
})

const dynamodb = new AWS.DynamoDB()

const params = {
    TableName: "TEST_TABLE",
    Key : {
        "Season" : {N: "5"},
        "Episode": {N: "3"}
    }
}

dynamodb.getItem(params,(err,data)=>{
    if(err){
        console.log(JSON.stringify(err,null,2))
    }{
        // console.log("Data-",JSON.parse(JSON.stringify(data)))
        console.log("Data-:",data)
    }
})