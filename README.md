## Agile Software Practice - Assignment 1.

Step1: Created GitHub repository.

Step2: Created docker-compose.yml file to define services that needed, including Movies API, MongoDB, Redis and Mongo Express.

Step3: Run docker-compose up --build to build and start all the containers.

Step4: Run docker ps to check all containers' state and make sure they are all running.

Step5: Open browser and visit http://localhost:9000 and http://localhost:8081 to visit Movies API and Mongo Express to make sure they are running successfully.

# Movies API Project

This project is a simple application to manage a movie database. It includes a Movies API to interact with movie data stored in MongoDB, with Redis used for caching and rate limiting.

## Architecture Overview

- **Movies API**: Provides endpoints to interact with movie data.
- **MongoDB**: Stores all movie information.
- **Redis**: Caches responses and enforces rate limiting.
- **Mongo Express**: Web-based MongoDB administration interface (only used in development).
