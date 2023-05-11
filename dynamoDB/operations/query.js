const db = require("../db")

async function query(params) {
  try {
    const data = await db.dynamodb.query(params).promise()
    return data
  } catch (err) {
    // console.log("Error", err.stack);
    return err.stack
  }
};


module.exports = {
  query
}