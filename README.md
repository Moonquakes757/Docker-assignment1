## Agile Software Practice - Assignment 1.

__Name:__ Shaohua Xu

__Demo:__ https://www.youtube.com/watch?v=DkrsW0eEKDo

### Database Seeding.

To automate the seeding of the application's database, a script was implemented using Node.js and MongoDB. This script connects to the MongoDB instance running in a Docker container, reads data from a seeding.json file, and inserts the data into the specified database collection. The process is as follows:

Database Connection: The script uses MongoClient from the mongodb package to connect to the MongoDB server. The connection details, including the server URL and credentials, are specified as environment variables in the Docker Compose configuration.

Data Ingestion: Movie data from seeding.json is read and parsed, then inserted into the movies collection in the database.

### M.ulti-Stack.

The docker-compose.yml file defines all necessary services (e.g., application server, database) with ports exposed to facilitate local development.

a. seed Service
Purpose: Runs a script to seed the database with initial data.
Environment Variables: Sets MONGODB_URI to connect to the MongoDB database.
Build: Uses the current directory (.) to build a Docker image.
Command: Executes the node seed.js command to seed the database.
Depends On: Waits for mongo to be up and running before executing.

b. movies-api Service
Purpose: The main API service for managing and accessing movie data.
Image: Uses the pre-built image doconnor/movies-api:1.0.
Container Name: Named movies-api for easy identification.
Ports: Maps port 9000 on the container to port 9000 on the host machine, exposing the API.
Environment Variables:
MONGODB_URI: URI to connect to MongoDB.
REDIS_URI: URI to connect to the Redis service.

c. mongo Service
Purpose: Sets up a MongoDB database.
Image: Uses the mongo:8.0-rc image.
Container Name: Named mongo for easy identification.
Environment Variables: Sets the root username and password for MongoDB.

d. mongo-express Service
Purpose: A web-based administration interface for MongoDB.
Image: Uses the mongo-express:1.0-20-alpine3.19 image.
Container Name: Named mongo-express for easy identification.
Ports: Maps port 8081 on the container to port 8081 on the host machine, exposing the interface.
Environment Variables: Configures the Mongo Express admin credentials and connects to the mongo service.

e. redis Service
Purpose: Sets up a Redis instance for caching and other functionalities.
Image: Uses the redis:alpine image for a lightweight Redis setup.
Container Name: Named redis for easy identification.

# Movies API Project

This project is a simple application to manage a movie database. It includes a Movies API to interact with movie data stored in MongoDB, with Redis used for caching and rate limiting.

## Architecture Overview

- **Movies API**: Provides endpoints to interact with movie data.
- **MongoDB**: Stores all movie information.
- **Redis**: Caches responses and enforces rate limiting.
- **Mongo Express**: Web-based MongoDB administration interface (only used in development).

## Setup and Usage
1. Install Dependencies
Ensure you have the following software installed on your system:

- **Docker**
- **Docker Compose**
- **Node.js**

2. Configure and Start Docker
Start Docker Desktop: Make sure Docker Desktop is running on your system.

3. Build and Start Services
Navigate to the project directory in your terminal and run:

- docker-compose up --build

4. Seed the Database
The seed.js script will automatically run and seed the database with data from seeding.json when Docker services are started.

5. Open from browser
Once the services are up and running, you can access:

   - Movies API at `http://localhost:9000/`
   - Mongo Express at `http://localhost:8081/`
