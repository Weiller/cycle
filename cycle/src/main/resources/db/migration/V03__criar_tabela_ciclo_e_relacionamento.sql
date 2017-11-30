CREATE TABLE ciclo (
  codigo       BIGINT PRIMARY KEY,
  nome         VARCHAR(50) NOT NULL,
  total_hora   BIGINT      NOT NULL,
  data_criacao DATE        NOT NULL
);

CREATE SEQUENCE sq_ciclo
INCREMENT 1
MINVALUE 1
MAXVALUE 9223372036854775807
START 1
CACHE 1;


CREATE TABLE ciclo_materia (
  codigo_ciclo   BIGINT,
  codigo_materia BIGINT,
  PRIMARY KEY (codigo_ciclo, codigo_materia),
  FOREIGN KEY (codigo_ciclo) REFERENCES cycle.ciclo (codigo),
  FOREIGN KEY (codigo_materia) REFERENCES cycle.materia (id)
);
