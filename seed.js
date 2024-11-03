const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// Load MongoDB URL from environment variable or use a default value
const url = process.env.MONGO_URL || 'mongodb://admin:password@mongo:27017';
const dbName = 'movies';
const client = new MongoClient(url, { useUnifiedTopology: true });

async function seedDB() {
  try {
    // Connect to the MongoDB client
    await client.connect();
    console.log('Successfully connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('movies');

    // Clear existing data to avoid duplicates
    await collection.deleteMany({});
    console.log('Cleared existing movie data');

    // Load movie data from seeding.json using path module
    const filePath = path.join(__dirname, 'seeding.json');
    const movies = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Insert movies into the collection
    const result = await collection.insertMany(movies);
    console.log(`Inserted ${result.insertedCount} movies into the database`);
  } catch (error) {
    console.error('Error seeding the database:', error.message);
  } finally {
    // Ensure the client is closed, even if an error occurs
    await client.close();
    console.log('MongoDB connection closed');
  }
}

seedDB();
