## Agile Software Practice - Assignment 1.

# Movies API Project

This project is a simple application to manage a movie database. It includes a Movies API to interact with movie data stored in MongoDB, with Redis used for caching and rate limiting.

## Architecture Overview

- **Movies API**: Provides endpoints to interact with movie data.
- **MongoDB**: Stores all movie information.
- **Redis**: Caches responses and enforces rate limiting.
- **Mongo Express**: Web-based MongoDB administration interface (only used in development).

## Project Structure

- **seed.js**: A script written in Node.js to seed the movie database.
- **seeding.json**: A JSON file containing initial movie data to be inserted into the MongoDB collection.
- **docker-compose.yml**: The Docker Compose file to configure and run the services needed, including the MongoDB database.

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

## Project Details
- seed.js
    Connects to the MongoDB database specified in the Docker Compose configuration.
    Loads the movie data from seeding.json.
    Inserts the data into the movies collection.
    Logs the number of movies inserted and closes the database connection.

- seeding.json
    Contains an array of movie objects, each with the following attributes:
    overview: A short description of the movie.
    popularity: A numerical value representing the movie's popularity.
    genre: The genre of the movie (e.g., Drama, Comedy, Horror, etc.).
    name: The title of the movie.