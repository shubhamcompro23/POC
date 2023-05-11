const AWS = require("aws-sdk")
const dotenv = require('dotenv').config()


const region = process.env.REGION
const endpoint = process.env.ENDPOINT

AWS.config.update({
    region,
    endpoint
})

const dynamodb = new AWS.DynamoDB()


module.exports = {
    dynamodb
};