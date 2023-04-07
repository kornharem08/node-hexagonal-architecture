const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbName = 'manager';

let client;
let db;

exports.connect = async () => {
  client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db = await client.db(dbName);
};

exports.getDb = () => {
  if (!client) {
    throw new Error('Database not connected!');
  }
  return db;
};