const AWS = require("aws-sdk")

AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
})


const dynamodb = new AWS.DynamoDB()

const params = {
    RequestItems: {
     "TEST_TABLE": [
         {
        PutRequest: {
         Item: {
          "Season": {
            N: "6"
           }, 
          "Episode": {
            N: "1"
           }, 
          "Description": {
            S: "This is episode1"
           }
         }
        }
       }, 
         {
            PutRequest: {
                Item: {
                 "Season": {
                   N: "6"
                  }, 
                 "Episode": {
                   N: "2"
                  }, 
                 "Description": {
                   S: "This is episode 2"
                  }
                }
            }
       }, 
         {
            PutRequest: {
                Item: {
                 "Season": {
                   N: "6"
                  }, 
                 "Episode": {
                   N: "3"
                  }, 
                 "Description": {
                   S: "This is episode 3"
                  }
                }
            }
       }
      ]
    }
};
dynamodb.batchWriteItem(params, function(err, data) {
    if (err) {
        console.log(err, err.stack);
    }
    else{
        console.log("Data - ",data); 
    }          
});