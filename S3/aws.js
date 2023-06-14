const AWS = require('aws-sdk');
const fs = require('fs');
const dotenv = require("dotenv").config()

AWS.config.update({region: 'us-east-1'});

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
})

let bucket = "comprodls"
let path = "api_team_test/shubham_dev/"

const uploadFile = (req,res) => {
  try{
    let file = './sample.xlsx';
    let fileName = 'sample5.xlsx';
    fs.readFile(file, (err, data) => {
      if (err) throw err;
  
      const params = {
        Bucket: bucket,
        Key: path + fileName,
        Body: data
      }
  
      let response = s3.upload(params).promise()
    })

    res.send({
      message: "file upload successfully",
    })
  }catch(err){
    console.log("error--", err)
  }
}


async function getFile(req,res) {
  try{
    let fileName = 'sample3.xlsx';
    const params = {
      Bucket: bucket,
      Key: path + fileName,
    }
  
    let data = await s3.getObject(params).promise()

    res.attachment('file.xlsx');
    res.send(data.Body);
  }catch(err){
    console.log("error--", err)
  }
}

async function deleteFile(req,res) {
  try{
    let fileName = 'sample5.xlsx';
    const params = {
      Bucket: bucket,
      Key: path + fileName,
    }
  
    let data = await s3.deleteObject(params).promise()
    res.send({
      message: "file delete successfully",
      data
    })
  }catch(err){
    console.log("error--", err)
  }
}

async function objectList(req,res) {
  try{
    const params = {
      Bucket: bucket,
      Prefix: path
    }
  
    let data = await s3.listObjectsV2(params).promise()
    res.send({
      message: "get objects successfully",
      data
    })
  }catch(err){
    console.log("error--", err)
  }
}
module.exports = {
  getFile,
  uploadFile,
  deleteFile,
  objectList
}

