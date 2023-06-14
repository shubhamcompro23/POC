const express = require('express')
const router = express.Router()
const awsController = require("./aws")


router.get('/',  awsController.getFile)
router.get('/upload',  awsController.uploadFile)
router.get('/delete',  awsController.deleteFile)
router.get('/objectList',  awsController.objectList)


module.exports = router