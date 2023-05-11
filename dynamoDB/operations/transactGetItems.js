const db = require("../db")


async function transactGetItems(params) {
    try {
      const data = await db.dynamodb.transactGetItems(params).promise()
      return data
    } catch (err) {
      return err.stack
    }
};


module.exports = {
  transactGetItems
}