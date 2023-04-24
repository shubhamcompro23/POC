const AWS = require("aws-sdk")

AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
})

const dynamodb = new AWS.DynamoDB()

const params = {
    // ExpressionAttributeNames: {
    //  "Description": "Description"
    // }, 
    ExpressionAttributeValues: {
      ":Description": {
        S: "Updated Episode2"
       },
    }, 
    Key: {
     "Season": {
       N: "5"
      }, 
     "Episode": {
       N: "4"
      }
    }, 
    ReturnValues: "ALL_NEW", // UPDATED_NEW,UPDATED_OLD,ALL_OLD, NONE
    TableName: "TEST_TABLE", 
    UpdateExpression: "Set Description= :Description"
};

dynamodb.updateItem(params, (err,data)=>{
    if(err){
        console.log("error stack---", err)
    }else{
        console.log("updated Item---", data)
    }
})