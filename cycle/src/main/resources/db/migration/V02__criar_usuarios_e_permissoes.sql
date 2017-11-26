CREATE TABLE usuario(
codigo BIGINT PRIMARY KEY,
nome VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
senha VARCHAR(150) NOT NULL
);

CREATE SEQUENCE sq_usuario
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;

CREATE TABLE permissao(
codigo BIGINT PRIMARY KEY,
descricao VARCHAR(50) NOT NULL
);

CREATE SEQUENCE sq_permissao
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;

CREATE TABLE usuario_permissao(
codigo_usuario BIGINT NOT NULL,
codigo_permissao BIGINT NOT NULL,
PRIMARY KEY(codigo_usuario, codigo_permissao),
FOREIGN KEY(codigo_usuario) references usuario(codigo),
FOREIGN KEY(codigo_permissao) references permissao(codigo)
);

INSERT INTO usuario(codigo, nome, email, senha) values (1, 'Administrador', 'admin@gmail.com', '$2a$10$OR44RFZfIx0OYyWymkhQf.RKv.qqhFDyN5jWLMH8XRL2h0wIn4XZy');

INSERT INTO permissao(codigo, descricao) values (1, 'ROLE_GERAL');

INSERT INTO usuario_permissao(codigo_usuario, codigo_permissao) values(1,1);

