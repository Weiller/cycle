ALTER TABLE materia ADD COLUMN codigo_ciclo BIGINT NOT NULL;

ALTER TABLE materia ADD FOREIGN KEY (codigo_ciclo) REFERENCES ciclo(codigo);