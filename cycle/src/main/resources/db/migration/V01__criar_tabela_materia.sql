CREATE TABLE materia(
id BIGINT PRIMARY KEY NOT NULL,
nome VARCHAR(150) NOT NULL
);

CREATE SEQUENCE sq_materia
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;