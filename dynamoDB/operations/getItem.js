const db = require("../db")


const getItem = async(table, key, ProjectionExpression, ConditionExpression)=> {

    try{
        const params = {
            TableName: table,
            Key : key,
            ProjectionExpression,
            ConditionExpression
        }
        
        const data = await db.dynamodb.getItem(params).promise()
    
        return data
    }catch(err){
        
        return err.stack
    }
}

module.exports = {
    getItem
};