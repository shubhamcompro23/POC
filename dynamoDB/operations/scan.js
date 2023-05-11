
const db = require("../db")


async function scan(params) {
  try{
    const data = await db.dynamodb.scan(params).promise()
    return data
  }catch(err){
    return err.stack
  }
}

module.exports= {
  scan
}
