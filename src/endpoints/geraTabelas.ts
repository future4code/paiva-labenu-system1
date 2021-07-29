import { Request, Response } from "express"
import { connection } from "../data/connection"

export const criaTabelas = async (req: Request, res: Response): Promise<void> => {
    try {

        await connection.raw(`
    CREATE TABLE labenu_system_turma (
        id VARCHAR(50) NOT NULL PRIMARY KEY,
        nome VARCHAR(50) NOT NULL,
        data_inicio DATE NOT NULL,
        data_final DATE NOT NULL,
        modulo ENUM('0', '1', '2', '3', '4', '5', '6', '7') DEFAULT '0'
        );
        
        CREATE TABLE labenu_system_estudante(
        id VARCHAR(50) NOT NULL PRIMARY KEY,
        nome VARCHAR(50),
        email VARCHAR(50) NOT NULL UNIQUE,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(50) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES labenu_system_turma(id)
        );
        
        CREATE TABLE labenu_system_docente (
        id VARCHAR(50) NOT NULL PRIMARY KEY,
        nome VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(50) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES labenu_system_turma(id)
        );
        
        CREATE TABLE labenu_system_passatempo(
        id VARCHAR(50) PRIMARY KEY NOT NULL,
        nome VARCHAR(50) NOT NULL
        );
        
        CREATE TABLE labenu_system_especialidade(
        id VARCHAR(50) PRIMARY KEY NOT NULL,
        nome VARCHAR(50) NOT NULL
        );
        
        CREATE TABLE labenu_system_estudante_passatempo (
        id VARCHAR(50) NOT NULL PRIMARY KEY,
        estudante_id VARCHAR(50) NOT NULL,
        passatempo_id VARCHAR(50) NOT NULL,
        FOREIGN KEY (estudante_id) REFERENCES labenu_system_estudante(id),
        FOREIGN KEY (passatempo_id) REFERENCES labenu_system_passatempo(id)
        );
        
        CREATE TABLE labenu_system_docente_especialidade (
        id VARCHAR(50) NOT NULL PRIMARY KEY,
        docente_id VARCHAR(50) NOT NULL,
        especialidade_id VARCHAR(50) NOT NULL,
        FOREIGN KEY (docente_id) REFERENCES labenu_system_docente(id),
        FOREIGN KEY (especialidade_id) REFERENCES labenu_system_especialidade(id)
        );
        
        INSERT INTO labenu_system_especialidade(id, nome)
        VALUES(
            "001",
            "React"
        );
        INSERT INTO labenu_system_especialidade(id, nome)
        VALUES(
            "002",
            "Redux"
        );
        INSERT INTO labenu_system_especialidade(id, nome)
        VALUES(
            "003",
            "CSS"
        );
        INSERT INTO labenu_system_especialidade(id, nome)
        VALUES(
            "004",
            "Typescript"
        );
        INSERT INTO labenu_system_especialidade(id, nome)
        VALUES(
            "005",
            "Programação Orientada a Objetos"
        );
        INSERT INTO labenu_system_especialidade(id, nome)
        VALUES(
            "006",
            "Backend"
        );
        INSERT INTO labenu_system_especialidade(id, nome)
        VALUES(
            "007",
            "Testes"
        );
        
        INSERT INTO labenu_system_passatempo(id, nome)
        VALUES(
            "542354", 
            "skate de mão"
        );
        INSERT INTO labenu_system_passatempo(id, nome) 
        VALUES(
            "181115", 
            "correr na chuva"
        );
        INSERT INTO labenu_system_passatempo(id, nome) 
        VALUES(
            "748444", 
            "olhar pro teto"
        );
        INSERT INTO labenu_system_passatempo(id, nome) 
        VALUES(
            "847847", 
            "ver memes"
        );
        INSERT INTO labenu_system_passatempo(id, nome) 
        VALUES(
            "841844", 
            "chorar no banho"
        );
        INSERT INTO labenu_system_passatempo(id, nome) 
        VALUES(
            "748488",
            "comer de ansiedade"
         );
        INSERT INTO labenu_system_passatempo(id, nome) 
        VALUES(
            "984818", 
            "ver olimpiadas ao inves de trabalhar"
        );
        INSERT INTO labenu_system_passatempo(id, nome) 
        VALUES(
            "878454",
            "dormir"
        );
        
        INSERT INTO labenu_system_turma 
        VALUES(
            "1",
            "sem turma",
            "2021-03-21",
            "2021-06-25",
            "0"
        );
    `)

        res.status(200).send("tabelas criadas")
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}