const db = require("../db")


async function batchWrite(params) {
  
  try{
    const data =  await db.dynamodb.batchWriteItem(params).promise()

    return data
  }catch(err){
    return err.stack
  }

}

module.exports ={
  batchWrite
}

