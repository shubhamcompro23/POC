const stream = require('getstream');

// instantiate a new client (server side)
const client = stream.connect(
  'dvemkd87xqe9',
  '9y4jvvssap3ns785cbtr2v525wh7nxfddafgmh6j8kdw9hvwyy83guwx5pu5uwas'
);
 
async function addActivity(options){
    let user = client.feed(options.slug, options.userId);  

    let activity = { actor: options.userId, verb: options.verb, object: options.object };

    if(options.foreignId){
        activity.foreign_id = options.foreignId
    }

    if(options.time){
        activity.time = options.time
    }

    let data = await user.addActivity(activity);

    return data
}

async function getActivities(options) {
    let user = client.feed(options.slug, options.userId);  

    let params = {}
    if(options.limit){
        params.limit = options.limit
    }
    if(options.offset){
        params.offset = options.offset
    }
    if(options.id_lt){
        params.id_lt = options.id_lt
    }
    if(options.id_gt){
        params.id_gt = options.id_gt
    }

    if(options.ranking){
        params.ranking = options.ranking
    }

    let activities = await user.get(params)

    return activities
}


async function removeActivity(options) {
    let user = client.feed(options.slug, options.userId); 
    let result
    if(options.activityId){
        result = await user.removeActivity(options.activityId);
    }

    if(options.foreignId){
        result = await user.removeActivity({foreignId: options.foreignId});
    }

    return result 
}

async function followFeed(options) {
    let user =  client.feed(options.slug, options.currentUserId); 
    let result = await user.follow(options.slug, options.userId);
    return result
}

async function unfollowFeed(options) {
    let result
    let user =  client.feed(options.slug, options.currentUserId); 

    if(options.keepHistory){
        result = await user.unfollow('user', 'user_42', { keepHistory: true });
    }else{
        result = await user.unfollow(options.slug, options.userId);
    }

    return result
}

async function followers(options) {
    let user =  client.feed(options.slug, options.userId); 
    const result = await user.followers();

    return result
}

async function following(options) {
    let user =   client.feed(options.slug, options.userId); 
    let result = await user.following();
    return result
}

async function followStats(options) {
    let result = await client.feed(options.slug, options.userId).followStats()
    return result
}

async function addReaction(options) {
    let reaction

    if(options.reaction === "like"){
        reaction = await client.reactions.add(options.reaction,options.activityId,{},{userId: options.userId});
    }

    if(options.reaction === "comment"){
        reaction = await client.reactions.add(options.reaction, options.activityId, {"text": options.comment},{userId: options.userId});
    }
    return reaction
}

async function getReactions(options) {

    let params = {
        'activity_id': options.activityId,
    }
    if(options.reaction){
        params.reaction = options.reaction
    }

    if(options.limit){
        params.limit = options.limit
    }
    const reactions = await client.reactions.filter(params);

    return reactions
}

async function addCollection(options) {
    let collection = await client.collections.add(options.collectionName, options.entryId, options.data);
    return collection
}

async function getCollection(options) {
    let collection = await client.collections.get(options.collectionName, options.entryId);
    return collection
}

async function updateCollection(options) {
    let collection = await client.collections.update(options.collectionName, options.entryId, options.data);
    return collection
}

async function deleteCollection(options) {
    let collection = await client.collections.delete(options.collectionName, options.entryId);
    return collection
}
module.exports = {
    addActivity,
    getActivities,
    removeActivity,
    followFeed,
    unfollowFeed,
    followers,
    following,
    followStats,
    addReaction,
    getReactions,
    addCollection,
    getCollection,
    updateCollection,
    deleteCollection
}