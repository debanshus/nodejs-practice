var mongo = require('mongodb')
var client = mongo.MongoClient;

client.connect('mongodb://localhost:27017', {useUnifiedTopology: true}, function (er, mongoClient) {
    if (!er) {
        console.log('MongoDB is connected.')
    }
    var db = mongoClient.db('learn-mongo');

    var collection = create(db)

    insert(collection, {'name': 'debanshu', 'department': 'IT'})
    insert(collection, {'name': 'john', 'department': 'CSE'})
    insert(collection, {'name': 'max', 'department': 'MECH'})
    query(collection)
    update(collection, {'name': 'debanshu'}, {$set: {department: 'Tech'}})
    remove(collection, {'name': 'john'})
    query(collection)
});

function create(db) {
    db.createCollection('employees', {w: 1}, function (err, collection) {
        if (err) console.log(err);
        else console.log('collection employees created');
    });
    return db.collection('employees');
}

function insert(collection, data) {
    collection.insertOne(data, {w: 1}, function (error, result) {
        if (error) console.log('failed to insert data in mongodb');
        else console.log('successfully inserted data in mongodb');
    });
}

function update(collection, whereClause, dataToUpdate) {
    collection.updateOne(whereClause, dataToUpdate, {w: 1}, function (error, result) {
        if (error) console.log('failed to update data in mongodb');
        else console.log('successfully update data in mongodb');
    });
}

function remove(collection, whereClause) {
    collection.removeOne(whereClause, {w: 1}, function (error, result) {
        if (error) console.log('failed to delete data in mongodb');
        else console.log('successfully delete data in mongodb');
    });
}

function query(collection) {
    var stream = collection.find().stream();
    stream.on('data', function (data) {
        console.log(data);
    });

    stream.on('end', function (error, data) {
        console.log('data read done');
    });
}