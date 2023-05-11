const db = require("../db")

async function deleteOperation(table,queryData,conditionExpression) {
  
  try {

    const params = {
      "TableName": table,
      Key: queryData, 
      ConditionExpression: conditionExpression,
      ReturnValues: "ALL_OLD"
    };

    const data = await db.dynamodb.deleteItem(params).promise();
    console.log("Data Deleted Successfully")
    return data
  } catch (err) {
    if(err.code  === 'ConditionalCheckFailedException'){
      return "Item does not exist"
    }
    console.log("Error", err.stack);
  }
  
}


module.exports = {
  deleteOperation
}