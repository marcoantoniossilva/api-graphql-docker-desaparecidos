SELECT 'CREATE DATABASE api_desaparecidos'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'api_desaparecidos')\gexec
\c api_desaparecidos;

CREATE SEQUENCE pessoas_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1;

CREATE TABLE pessoas (
  cod_pessoa int check (cod_pessoa > 0) NOT NULL DEFAULT NEXTVAL ('pessoas_seq'),
  nome varchar(255) NOT NULL,
  data_nascimento date DEFAULT NULL,
  imagem varchar(255) DEFAULT NULL,
  sexo char(1) DEFAULT NULL,
  cor_olhos varchar(255) DEFAULT NULL,
  cor_pele varchar(255) DEFAULT NULL,
  cor_cabelo varchar(255) DEFAULT NULL,
  peso_aproximado double precision DEFAULT NULL,
  altura_aproximada double precision DEFAULT NULL,
  tipo_fisico varchar(255) DEFAULT NULL,
  transtorno_mental varchar(255) DEFAULT NULL,
  marca_caracteristica varchar(255) DEFAULT NULL,
  PRIMARY KEY (cod_pessoa)
);

CREATE SEQUENCE ufs_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1;

CREATE TABLE ufs (
  cod_uf int check (cod_uf > 0) NOT NULL DEFAULT NEXTVAL ('ufs_seq'),
  sigla varchar(255) NOT NULL,
  PRIMARY KEY (cod_uf)
);

CREATE SEQUENCE cidades_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1;

CREATE TABLE cidades (
  cod_cidade int check (cod_cidade > 0) NOT NULL DEFAULT NEXTVAL ('cidades_seq'),
  cod_uf int check (cod_uf > 0) NOT NULL,
  nome_cidade varchar(255) NOT NULL,
  PRIMARY KEY (cod_cidade),
  CONSTRAINT cidades_coduf_foreign FOREIGN KEY (cod_uf) REFERENCES ufs (cod_uf)
);

CREATE INDEX cidades_coduf_foreign ON cidades (cod_uf);

CREATE SEQUENCE bairros_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1;

CREATE TABLE bairros (
  cod_bairro int check (cod_bairro > 0) NOT NULL DEFAULT NEXTVAL ('bairros_seq'),
  cod_cidade int check (cod_cidade > 0) NOT NULL,
  nome_bairro varchar(255) NOT NULL,
  PRIMARY KEY (cod_bairro),
  CONSTRAINT bairros_codcidade_foreign FOREIGN KEY (cod_cidade) REFERENCES cidades (cod_cidade)
);

CREATE INDEX bairros_codcidade_foreign ON bairros (cod_cidade);

CREATE SEQUENCE locais_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1;

CREATE TABLE locais (
  cod_local int check (cod_local > 0) NOT NULL DEFAULT NEXTVAL ('locais_seq'),
  cod_bairro int check (cod_bairro > 0) NOT NULL,
  latitude varchar(255) DEFAULT NULL,
  longitude varchar(255) DEFAULT NULL,
  PRIMARY KEY (cod_local),
  CONSTRAINT locais_codbairro_foreign FOREIGN KEY (cod_bairro) REFERENCES bairros (cod_bairro)
);

CREATE INDEX locais_codbairro_foreign ON locais (cod_bairro);

CREATE SEQUENCE desaparecimentos_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 START 1;

CREATE TABLE desaparecimentos (
  cod_desaparecimento int check (cod_desaparecimento > 0) NOT NULL DEFAULT NEXTVAL ('desaparecimentos_seq'),
  cod_pessoa int check (cod_pessoa > 0) NOT NULL,
  cod_local int check (cod_local > 0) NOT NULL,
  data_desaparecimento date DEFAULT NULL,
  informacoes text,
  fonte varchar(255) DEFAULT NULL,
  boletim_ocorrencia smallint DEFAULT NULL,
  ultima_hora_vista time(0) DEFAULT NULL,
  PRIMARY KEY (cod_desaparecimento),
  CONSTRAINT desaparecimentos_codlocal_foreign FOREIGN KEY (cod_local) REFERENCES locais (cod_local),
  CONSTRAINT desaparecimentos_codpessoa_foreign FOREIGN KEY (cod_pessoa) REFERENCES pessoas (cod_pessoa)
);

CREATE INDEX desaparecimentos_codpessoa_foreign ON desaparecimentos (cod_pessoa);
CREATE INDEX desaparecimentos_codlocal_foreign ON desaparecimentos (cod_local);