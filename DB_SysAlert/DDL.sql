-- Criação do banco de dados
CREATE DATABASE DB_SysAlert;

-- Seleciona o banco de dados criado
USE DB_SysAlert;

-- Criação da tabela 'usuario'
CREATE TABLE usuario (
    id_usuario INT(10) PRIMARY KEY NOT NULL,
    nome_usuario CHAR(80) NOT NULL,
    email_usuario VARCHAR(50) NOT NULL,
    nivel_usuario INT(1) NOT NULL,
    token_usuario VARCHAR(100) NOT NULL,
    status_usuario BOOLEAN NOT NULL
);

-- Criação da tabela 'aviso_critico'
CREATE TABLE aviso_critico (
    id_ac VARCHAR(20) PRIMARY KEY NOT NULL,
    texto_ac VARCHAR(255) NOT NULL,
    status_ac BOOLEAN NOT NULL,
    data_inicio_ac DATETIME NOT NULL,
    data_fim_ac DATETIME
);

-- Criação da tabela 'falha_sistemica'
CREATE TABLE falha_sistemica (
    id_fs VARCHAR(20) PRIMARY KEY NOT NULL,
    sistema_afetado_fs VARCHAR(50) NOT NULL,
    data_abertura_fs DATETIME NOT NULL,
    data_fechamento_fs DATETIME,
    status_fs BOOLEAN NOT NULL,
    equipe_tratativa_fs VARCHAR(20) NOT NULL,
    responsavel_fs CHAR(20) NOT NULL,
    descricao_fs VARCHAR(255) NOT NULL,
    orientacao_fs VARCHAR(255)
);

-- Criação da tabela 'falha_massiva'
CREATE TABLE falha_massiva (
    id_fm VARCHAR(20) PRIMARY KEY NOT NULL,
    os_cor_fm VARCHAR(20),
    tipo_fm CHAR(20) NOT NULL,
    aberta_por_fm CHAR(20) NOT NULL,
    localidade_fm CHAR(50) NOT NULL,
    regional_fm CHAR(50),
    qtd_afetado_fm INT(5),
    qtd_entrante_fm INT(5),
    data_abertura_fm DATETIME NOT NULL,
    data_fechamento_fm DATETIME,
    banner_fm BOOLEAN,
    data_inicio_banner_fm DATETIME,
    data_fim_banner_fm DATETIME,
    elemento_afetado_1_fm VARCHAR(50),
    elemento_afetado_2_fm VARCHAR(50),
    elemento_afetado_3_fm VARCHAR(50),
    elemento_afetado_4_fm VARCHAR(50),
    elemento_afetado_5_fm VARCHAR(50),
    descricao_fm VARCHAR(255) NOT NULL,
    solucao_fm VARCHAR(255),
    status_fm BOOLEAN NOT NULL,
    previsao_fm DATETIME,
    ssp1_fm varchar(50),
    ssp2_fm varchar(50),
    ssp3_fm varchar(50)
);

-- Criação da tabela 'Change_rdm'
CREATE TABLE Change_rdm (
    id_rdm VARCHAR(20) PRIMARY KEY NOT NULL,
    data_abertura_rdm DATETIME NOT NULL,
    data_fechamento_rdm DATETIME,
    descricao_rdm VARCHAR(255) NOT NULL,
    tempo_instabilidade_rdm VARCHAR(20) NOT NULL,
    cliente_afetado_rdn VARCHAR(255) NOT NULL,
    sistema_afetadi_rdm VARCHAR(255) NOT NULL,
    localidade_afetada VARCHAR(255) NOT NULL,
    status_rdm BOOLEAN NOT NULL
);
