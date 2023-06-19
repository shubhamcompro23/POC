const stream = require("./getStream")

async function addActivity() {
    try{
        let options = {
            slug: "user",
            userId: "01",
            verb: "photo",
            object: "Place:02"
        }
        
        const result = await stream.addActivity(options)
        console.log("addActivity--", result)
    }catch(err){
        console.log("error---", err)
    }
}

async function getActivities() {
    try {
        let getOptions = {
            slug: "user",
            userId: "02",
        }
        
        const activities = await stream.getActivities(getOptions)
        
        console.log("getActivities--", activities)
    }catch (err) {
        console.log("error", err)
    }
}


async function removeActivity() {
    try {
        let removeOptions = {
            slug: "user",
            userId: "01",
            activityId: "48ba2fde-0e79-11ee-9bbf-0227ff387cbc"
        }
        
        let removeActivity =  await stream.removeActivity(removeOptions)
        
        console.log("removeActivity--", removeActivity)
    } catch (err) {
        console.log("error", err)
    }
}

async function follow() {
    try {
        let options= {
            slug: "user",
            currentUserId: "02",
            userId: "01"
        }
    
        let result = await stream.followFeed(options)
        console.log("follow--", result)
    } catch (err) {
        console.log("err", err)
    }
}

async function unfollow() {
    let options= {
        slug: "user",
        currentUserId: "02",
        userId: "01",
        //keepHistory: true
    }

    let result = await stream.unfollowFeed(options)

    console.log("unfollow--", result)
}

async function followers() {
    try {
        
        let options = {
            slug: "user",
            userId: "01"
        }
        const result = await stream.followers(options)

        console.log("followers--", result)
    } catch (err) {
        console.log("error--", err)
    }
}

async function following() {

    try {
        let options = {
            slug: "user",
            userId: "02"
        }
        const result = await stream.following(options)

        console.log("following--", result)
    } catch (err) {
        console.log("error--", err)
    }
}

async function followStats(options) {
    try {
        let options = {
            slug: "user",
            userId: "01"
        }
        let result = await stream.followStats(options)
        console.log("stats", result)
    } catch (err) {
        
    }
}

async function addReaction() {
    try {
        let options = {
            activityId : "a29a3568-0e78-11ee-8e1c-069b69aeb8b6",
            reaction: "like",
            userId: "02"
        }
    
        let reaction = await stream.addReaction(options)
        console.log("reaction", reaction)
    } catch (err) {
        console.log("error--", err)
    }
}

async function getReactions() {
    try{
        let options = {
            activityId: "a29a3568-0e78-11ee-8e1c-069b69aeb8b6"
        }
    
        let reactions = await  stream.getReactions(options)
    
        console.log("getreactions--", reactions)
    }catch(err){
        console.log("error--", err)
    }
}

async function addCollection() {
    try {
        let options = {
            collectionName: "Burgers",
            entryId: "veg-burger",
            data: {
                name: "Cheese Burger",
                rating: "4 stars"
            }
        }
        let collection = await stream.addCollection(options)

        console.log("addcollection--", collection)
    } catch (err) {
        console.log("error--", err)
    }
}

async function getCollection(params) {
    try {
        let options = {
            collectionName: "Burgers",
            entryId: "veg-burger"
        }

        let collection = await stream.getCollection(options)
        console.log("getcollection--", collection)
    } catch (err) {
        console.log("err", err)
    }

}

async function deleteCollection(params) {
    try {
        let options = {
            collectionName: "Burgers",
            entryId: "veg-burger"
        }

        let collection = await stream.deleteCollection(options)
        console.log("deletecollection--", collection)
    } catch (err) {
        console.log("err", err)
    }

}

async function updateCollection() {
    try {
        let options = {
            collectionName: "Burgers",
            entryId: "cheese-burger",
            data: {
                name: "Cheese Burger",
                rating: "3.8 stars"
            }
        }
        let collection = await stream.updateCollection(options)

        console.log("addcollection--", collection)
    } catch (err) {
        console.log("error--", err)
    }
}

// addActivity()
//getActivities()
//removeActivity()
//follow()
//unfollow()
//followers()
//following()
//followStats()
//addReaction()
//getReactions()
//addCollection()
getCollection()
//updateCollection()
//deleteCollection()
