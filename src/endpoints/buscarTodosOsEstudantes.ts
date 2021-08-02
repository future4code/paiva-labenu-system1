import { Request, Response } from "express";
import moment from "moment";
import buscaTabela from "../data/buscaTabela";
import { estudante } from "../types/estudante";

export const buscarTodosOsEstudantes = async (req: Request, res: Response) => {

    try {

        const result = await buscaTabela('estudante')

        if(!result){
            throw new Error("Estudantes não encontrados");
            
        }

        const estudantes: estudante  = result.map((estudante: any) => {
            return {
                id: estudante.id,
                nome: estudante.nome,
                email: estudante.email,
                data_nasc: moment(estudante.data_nasc, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                turma_id: estudante.turma_id
            }
        })


        res.status(200).send(estudantes)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}