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


IINSERT INTO "movies" ("name", "image_path", "release_date", "run_time", "genre_id")
VALUES('Citizen Kane', 'https://amp.businessinsider.com/images/537e6ff6ecad048059a1f54a-640-448.jpg', 'September 5 1941' ,'1h 59m', 1);