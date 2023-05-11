const putController = require("./operations/put")
const getController = require("./operations/getItem")
const deleteController = require("./operations/delete")
const updateController = require("./operations/update")
const queryController = require("./operations/query")
const batchGetController = require("./operations/batchGet")
const scanController = require("./operations/scan")
const transactGetItemsController = require("./operations/transactGetItems")
const batchWriteController = require("./operations/batchWrite")


async function data(){

    // PUT 

    const item = {
        "Season": {N: "10"},
        "Episode": {N: "1"},
        "Description": {S: "This is updated episode"},
        "actor": {S: "Shubham"},
        "actress": {S: "qwerty"} 
    }
    
    const conditionExpression = 'attribute_not_exists(Season) AND attribute_not_exists(Episode)'
    
    const putdata = await putController.put("TEST_TABLE", item, conditionExpression)

    console.log("data", putdata)
    
    // // GETITEM
    const key = {
        "Season" : {N: "7"},
        "Episode": {N: "6"}
    }
    const ProjectionExpression =  "Season,Episode"
    const ConditionExpression = 'attribute_exists(Season) AND attribute_exists(Episode)'
    
    const getdata = await getController.getItem("TEST_TABLE",key, ProjectionExpression,ConditionExpression)

    console.log("data", getdata)

    // // DELETE

    const key1 = {
        'Season': {N: "1"},
        'Episode': {N: "3"},
    }

    const conditionExpression1 = 'attribute_exists(Season) and attribute_exists(Episode)'


    const data2 = await deleteController.deleteOperation("TEST_TABLE", key1,conditionExpression1)

    console.log("data2",data2)

    // UPDATE

    const updateParams = {
        TableName: "TEST_TABLE",
        ExpressionAttributeNames: {
          "#D": "Description"
         }, 
        ExpressionAttributeValues: {
          ":d": {
            S: "Updated Episode new"
           },
        }, 
        Key: {
         "Season": {
           N: "1"
          }, 
         "Episode": {
           N: "4"
          }
        }, 
        ReturnValues: "ALL_NEW", // UPDATED_NEW,UPDATED_OLD,ALL_OLD, NONE 
        UpdateExpression: "Set #D= :d"
    };

    const update = await updateController.updateOperation(updateParams)
    console.log("update", update)

    // Query

    const queryparams = {
        "TableName": "TEST_TABLE",
        "ExpressionAttributeNames": {
            "#S": "Season",
            "#E": "Episode"
          },
        "ExpressionAttributeValues": {
          ":S": {
            "N": "2"
          },
          ":E": {
            "N": "2"
          }
        },
        "KeyConditionExpression": "#S = :S and #E > :E",
        "ProjectionExpression": "Season,Episode",
    };

    const queryData = await queryController.query(queryparams)

    console.log("queryData--",JSON.stringify(queryData))

    // batchGet

    const batchgetparams = {
        "RequestItems": {
          "TEST_TABLE": {
            "Keys": [
              {"Season": {"N": "2"},"Episode": {"N": "1"}},
              {"Season": {"N": "2"},"Episode": {"N": "2"}},
              {"Season": {"N": "3"},"Episode": {"N": "3"}},
            ],
            "ProjectionExpression": "Season, Episode"
          },
          "slot": {
            "Keys": [
              {"lotId": {"S": "1"}}
            ],
            "ProjectionExpression": "lotId, veichleNo, slotId, slotNo, levelNo, userId"
          }
        }
    };
    
    const batchgetdata = await batchGetController.batchGet(batchgetparams)

    console.log(JSON.stringify(batchgetdata))

    // Scan

    const params = {
        TableName: "TEST_TABLE",
        ExclusiveStartKey: { Season: {"N": '1'}, Episode: {"N": '1'} },
        FilterExpression: '#S = :val',
        ExpressionAttributeNames: { '#S': 'Season' },
        ExpressionAttributeValues: { ':val': { "N": "7"  } },
        Limit: 50,
        ProjectionExpression: "Season,Episode",
    };

    const scandata = await scanController.scan(params)

    console.log("scandata", JSON.stringify(scandata,0,2))

    //transactGet

    const transactGetparams = { 
        TransactItems: [ 
          { 
            Get: { 
              Key: { 
                "Season": {
                  N: "7",
                },
                "Episode": {
                    N: "1"
                }
              },
              TableName: "TEST_TABLE",
              ProjectionExpression: "Season,Episode",
            },
          },
          { 
            Get: { 
              Key: { 
                "Season": {
                  N: "7",
                },
                "Episode": {
                    N: "2"
                }
              },
              TableName: "TEST_TABLE",
              ProjectionExpression: "Season,Episode",
            },
          },
          { 
            Get: { 
              Key: { 
                "lotId": {
                  S: "1",
                },
              },
              TableName: "slot",
              ProjectionExpression: "lotId,levelNo, slotNo, veichleNo",
            },
          },
          
        ],
    };

    const transactGetItems = await transactGetItemsController.transactGetItems(transactGetparams)

    console.log("transactGetItemsController----",JSON.stringify(transactGetItems, 0 , 2))


    // batchWrite 

    const batchWriteparams = {
        RequestItems: {
        "TEST_TABLE": [
            {
            PutRequest: {
            Item: {
              "Season": {
                N: "6"
              }, 
              "Episode": {
                N: "1"
              }, 
              "Description": {
                S: "This is episode1"
              }
            }
            }
          }, 
            {
                PutRequest: {
                    Item: {
                    "Season": {
                      N: "6"
                      }, 
                    "Episode": {
                      N: "2"
                      }, 
                    "Description": {
                      S: "This is episode 2"
                      }
                    }
                }
          }, 
            {
                PutRequest: {
                    Item: {
                    "Season": {
                      N: "6"
                      }, 
                    "Episode": {
                      N: "3"
                      }, 
                    "Description": {
                      S: "This is episode 3"
                      }
                    }
                }
          },
          {
            DeleteRequest: {
              Key: {
                'Season': {N: "1"},
                'Episode': {N: "4"},
              }
            }
          }
          ]
        }
    };

    const data = await batchWriteController.batchWrite(batchWriteparams)

    console.log("batchWrite------", data)
}

data()