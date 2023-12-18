const MongoClient = require("mongodb").MongoClient;

// Connection URL and database name
const url = "mongodb://localhost:27017s";
const dbName = "UGMC";

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.error("Error occurred while connecting to the database", err);
      return;
    }

    console.log("Connected to the database");

    // Specify the database
    const db = client.db(UGMC);

    const collection = db.collection("Patient info");
    collection.insertOne({ key: "value" }, (err, result) => {
      if (err) {
        console.error("Error occurred while inserting document", err);
      } else {
        console.log("Document inserted successfully", result.ops);
      }

      client.close();
    });
  }
);
