const db = require("../db")

async function updateOperation(params){
  try{
    
  
    const data = await db.dynamodb.updateItem(params).promise()

    return data

  }catch(err){
    console.log("error---", err.stack)
    if(err.code  === 'ConditionalCheckFailedException'){
      return "Item with these Season and Episode values is not exists"
    }
  }
}

module.exports = {
  updateOperation
}