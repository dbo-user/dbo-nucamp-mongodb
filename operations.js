const assert = require('assert').strict;

exports.insertDocument = (db, document, collection, callback) => {
    const theCollection = db.collection(collection);
    theCollection.insertOne(document, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
};

exports.findDocuments = (db, collection, callback) => {
    const theCollection = db.collection(collection);
    theCollection.find().toArray((err, docs) => {
        assert.strictEqual(err, null);
        callback(docs);
    });
};

exports.removeDocument = (db, document, collection, callback) => {
    const theCollection = db.collection(collection);
    theCollection.deleteOne(document, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
};

exports.updateDocument = (db, document, update, collection, callback) => {
    const theCollection = db.collection(collection);
    theCollection.updateOne(document, { $set: update }, null, (err, result) => {
        assert.strictEqual(err, null);
        callback(result);
    });
};