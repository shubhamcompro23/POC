const db = require("../db")


async function batchGet(params){
    try {
      const data = await db.dynamodb.batchGetItem(params).promise()
      return data
    } catch (err) {
      return err.stack
    }
};


module.exports = {
  batchGet
}
