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

        INSERT INTO labenu_system_turma 
        VALUES(
            "798785435",
            "stalone",
            "2020-03-21",
            "2020-09-25",
            "2"
        );

        INSERT INTO labenu_system_turma 
        VALUES(
            "7545344354",
            "VanDaime-na-night",
            "2021-09-21",
            "2022-03-25",
            "6"
        );

        INSERT INTO labenu_system_estudante 
        VALUES(
            "75354",
            "Juliana",
            "bb@bb.com",
            "1995-06-17",
            "1"            
        );

        INSERT INTO labenu_system_estudante 
        VALUES(
            "83834",
            "Marcos",
            "email@email.com",
            "1990-12-15",
            "7545344354"             
        );

        INSERT INTO labenu_system_estudante 
        VALUES(
            "121231",
            "Joselito",
            "teste@teste.com",
            "1975-01-27",
            "798785435"           
        );

        INSERT INTO labenu_system_docente 
        VALUES(
            "434321231",
            "Girafales",
            "chaves@sbt.com",
            "1970-11-19",
            "798785435"           
        );
        
        INSERT INTO labenu_system_docente 
        VALUES(
            "434241231",
            "Linguica",
            "chaves2@sbt.com",
            "1970-11-19",
            "7545344354"           
        );

        INSERT INTO labenu_system_docente 
        VALUES(
            "435435441",
            "Carlos",
            "carlos@lab.com",
            "1990-11-19",
            "1"           
        );

        INSERT INTO labenu_system_estudante_passatempo Values("a", "75354", "878454");
        
        INSERT INTO labenu_system_estudante_passatempo Values("b", "75354", "748444");
        
        INSERT INTO labenu_system_estudante_passatempo Values("c", "75354", "847847");
        
        INSERT INTO labenu_system_estudante_passatempo Values("d", "83834", "984818");
        
        INSERT INTO labenu_system_estudante_passatempo Values("e", "83834", "181115");
        
        INSERT INTO labenu_system_estudante_passatempo Values("f", "83834", "748488");
        
        INSERT INTO labenu_system_estudante_passatempo Values("g", "83834", "847847");
        
        INSERT INTO labenu_system_estudante_passatempo Values("h", "121231", "847847");
        
        INSERT INTO labenu_system_estudante_passatempo Values("i", "121231", "748488");
        
        INSERT INTO labenu_system_estudante_passatempo Values("j", "121231", "841844");
        
        INSERT INTO labenu_system_estudante_passatempo Values("k", "121231", "878454");
        
        INSERT INTO labenu_system_docente_especialidade Values("aa", "434321231", "001");

        INSERT INTO labenu_system_docente_especialidade Values("ab", "434321231", "002");

        INSERT INTO labenu_system_docente_especialidade Values("ac", "434241231", "003");

        INSERT INTO labenu_system_docente_especialidade Values("ad", "434241231", "004");

        INSERT INTO labenu_system_docente_especialidade Values("ae", "435435441", "005");

        INSERT INTO labenu_system_docente_especialidade Values("af", "435435441", "006");

        INSERT INTO labenu_system_docente_especialidade Values("ag", "435435441", "007");
        
    `)

        res.status(200).send({message:"tabelas criadas"})
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}