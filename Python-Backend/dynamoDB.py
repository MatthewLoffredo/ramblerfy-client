import pymongo as pymongo

# Change it to your username and password
client = pymongo.MongoClient(
    "mongodb+srv://<username>:<password>@ramblerpy-5rd9x.mongodb.net/test?retryWrites=true&w=majority")
db = client.test

# {tracks: {$ne: '{tracks: {"danceabilty>0.7"}'}}
# $filter: {input: "$items",as: "item", cond: { $gte: [ "$$item.price", 100 ] }
