import { Request, Response } from "express";
import moment from "moment";
import buscaTabela from "../data/buscaTabela";
import { turma } from "../types/turma";

export const buscarTodasAsTurmas = async (req: Request, res: Response) => {

    try {

        const result = await buscaTabela('turma')

        if(!result){
            throw new Error("Turmas não encontradas");
            
        }

        const turmas  = result.map((turma: any) => {
            return {
                id: turma.id,
                nome: turma.nome,
                data_inicio: moment(turma.data_inicio, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                data_final: moment(turma.data_final, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                modulo: turma.modulo
            }
        })


        res.status(200).send(turmas)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}