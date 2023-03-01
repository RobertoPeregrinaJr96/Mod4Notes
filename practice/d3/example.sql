DROP TABLE IF EXISTS animals;
CREATE TABLE animals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(150) NOT NULL,
        genus VARCHAR(75) NOT NULL,
        biome VARCHAR(200),
        avg_weight FLOAT (6, 2) NOT NULL,
        is_vertebrate BOOLEAN NOT NULL,
        diet VARCHAR(50),
        is_cute BOOLEAN DEFAULT true
    );


INSERT INTO animals (name,genus,biome,avg_weight,is_vertebrate,diet,is_cute)
VALUES ('Red panda','ailurus','temporate forest',7.4,true,'herbivore',0);


-- dont really use this
-- DROP ROW If EXISTS animals (name,genus,biome,avg_weight,is_vertebrate,diet,is_cute)
-- VALUES ('Red panda','ailurus','temporate forest',7.4,true,'herbivore',true)


SELECT *
FROM animals

SELECT name, is_cute FROM animals;