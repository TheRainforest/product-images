DROP DATABASE IF EXISTS productImages;
DROP TABLE IF EXISTS items;
CREATE DATABASE productImages;
\c productImages;

CREATE TABLE items (
  id SERIAL NOT NULL PRIMARY KEY,
  images text[]
);
