require("dotenv").config();
const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.DB_HOST_FULL;
const client = new MongoClient(url);

// Database Name
const dbName = process.env.DB_NAME;

const connection = async () => {
    await client.connect();
    console.log("Connected successfully to MONGDB");
    const db = client.db(dbName);
    const collection = db.collection("documents");
}

module.exports = connection;
