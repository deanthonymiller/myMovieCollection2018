CREATE TABLE "movies" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "image_path" VARCHAR(200) NOT NULL,
    "release_date" VARCHAR(20) NOT NULL,
    "genre" VARCHAR(20) NOT NULL,
    "run_time" INTEGER NOT NULL
);

INSERT INTO "movies" ("name", "image_path", "release_date", "genre", "run_time")
VALUES('Citizen Kane', 'https://amp.businessinsider.com/images/537e6ff6ecad048059a1f54a-640-448.jpg', 'September 5, 1941', 'Drama/Myster', '1h 59m' );