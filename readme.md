##  Movie Collection WebApp
This is the Movie Collection WebApp, Where you can store you most names, genres, images, run times and dates.

Built With
--------------------
JavaScript
AngularJs
Nodejs
SQL
BootStrap

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Prerequisites
Link to software that is required to install the app (e.g. node).

Node.js prerequisites here
  "angular": "^1.7.2",
  "angular-animate": "^1.7.2",
  "angular-material": "^1.1.10",
  "angular-messages": "^1.7.2",
  "angular-route": "^1.7.2",
  "body-parser": "^1.18.3",
  "express": "^4.16.3",
  "pg": "^7.4.3",
  "url": "^0.11.0"


CREATE TABLE "movies" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    image_path VARCHAR(200) ,
    release_date VARCHAR(100),
    run_time VARCHAR(100),
    genre_id INT REFERENCES "genre"
);

CREATE TABLE "genre" (
id SERIAL PRIMARY KEY,
 "genre" VARCHAR(100)

);


Completed Features
High level list of items completed.

add & delete Movies
delete and add Genres
add images


Next Steps
update movies and Genres. 
movie api instead of storing in house images
edit feature

Deployment
Add additional notes about how to deploy this on a live system

Authors
De'Anthony Miller

Acknowledgments
Instructors & everyone in the nunki class
