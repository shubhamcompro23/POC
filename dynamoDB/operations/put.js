const db = require("../db")

async function put(table, item, ConditionExpression){

  try{
    const params = {
      TableName: table,
      Item: item,
      ReturnValues: "ALL_OLD",
    };
    if(ConditionExpression){
      params.ConditionExpression = ConditionExpression
    }

    console.log("params", params)
  
    const data = await db.dynamodb.putItem(params).promise()

    console.log("data---", JSON.stringify(data,0,2))

    return "successfully create new record"
  }catch(err){
    if(err.code  === 'ConditionalCheckFailedException'){
      return "Item with userId and sortKey already exists"
    }
    console.error("Error JSON.",err);
  }

}


module.exports = {
  put
};