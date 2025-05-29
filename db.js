const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://haziqharis97:Lolipopbiru97.@homie.rgkuvmu.mongodb.net/?retryWrites=true&w=majority&appName=Homie";
const client = new MongoClient(uri);

let db;

async function connectDB() {
  await client.connect();
  db = client.db("homie"); // your DB name
  console.log("✅ Connected to MongoDB!");
}

function getUsersCollection() {
  if (!db) throw new Error("DB not initialized. Call connectDB() first.");
  return db.collection("users");
}

module.exports = {
  connectDB,
  getUsersCollection,
};
