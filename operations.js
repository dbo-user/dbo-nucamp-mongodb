
exports.insertDocument = (db, document, collection) => {
    const newcollection = db.collection(collection);
    return newcollection.insertOne(document);
};

exports.findDocuments = (db, collection) => {
    const newcollection = db.collection(collection);
    return newcollection.find({}).toArray();
};

exports.removeDocument = (db, document, collection) => {
    const newcollection = db.collection(collection);
    return newcollection.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection) => {
    const newcollection = db.collection(collection);
    return newcollection.updateOne(document, { $set: update }, null);
};