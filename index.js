const MongoClient = require('mongodb').MongoClient;

const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'nucampsite';

MongoClient.connect(url, { useUnifiedTopology: true }).then(client => {

    console.log('YAHOO! Connected correctly to server');
    console.log('--------------------------------------------------');

    const db = client.db(dbname);
    console.log('** Database:',db.namespace);

    db.dropCollection('campsites')
    .then(result => {
        console.log('** Dropped Collection, result is', result);
        return dboper.insertDocument(db, { name: "Breadcrumb Trail Campground", description: "Test"},
        'campsites')
     })

    .then(result => {
        console.log('** Insert Document success:', result.ops);
        return dboper.findDocuments(db, 'campsites');
     })

    .then(docs => {
        console.log('** Found Documents success:', docs);
        return dboper.updateDocument(db, { name: "Breadcrumb Trail Campground" },
            { description: "Updated Test Description" }, 'campsites');
    })

    .then(result => {
        console.log('** Updated Document Count:', result.result.nModified);
        return dboper.findDocuments(db, 'campsites');
    })

    .then(docs => {
        console.log('** Found  Documents success:', docs);                   
        return dboper.removeDocument(db, { name: "Breadcrumb Trail Campground" },
            'campsites');
    })

    .then(result => {
        console.log('** Deleted Document Count:', result.deletedCount);
        return client.close();
    })

    .catch(err => {
        console.log('YOU HAVE AN ERROR',err); // handles errors from the chain
        client.close();
    });
})
.catch(err => console.log('YOU HAVE A CONNECTION ERROR',err)); // database connection failed on line 8                      

