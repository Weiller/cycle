ALTER TABLE ciclo ADD COLUMN total_horas_estudadas BIGINT;

ALTER TABLE ciclo ADD COLUMN data_ultimo_estudo timestamp without time zone;

ALTER TABLE ciclo ADD COLUMN qntd_ciclos_estudados INTEGER;
