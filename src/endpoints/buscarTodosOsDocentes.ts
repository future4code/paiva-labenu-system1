import { Request, Response } from "express";
import moment from "moment";
import buscaTabela from "../data/buscaTabela";
import { estudante } from "../types/estudante";

export const buscarTodosOsDocentes = async (req: Request, res: Response) => {

    try {

        const result = await buscaTabela('docente')

        if(!result){
            throw new Error("Docentes não encontrados");
            
        }

        const docentes  = result.map((docente: any) => {
            return {
                id: docente.id,
                nome: docente.nome,
                email: docente.email,
                data_nasc: moment(docente.data_nasc, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                turma_id: docente.turma_id
            }
        })


        res.status(200).send(docentes)
    } catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}