import { Request, Response } from "express-serve-static-core"
import buscaDocentes from "../data/buscaDocentes";
import buscaEstudantes from "../data/buscaEstudantes";
import moment from 'moment'

const buscarDocentePorTurma = async (req: Request, res: Response) => {

    try {

        const idTurma = req.params.id

        if (!idTurma) {
            throw new Error("Insira uma turma");

        }

        const result = await buscaDocentes(idTurma)


        if (!result) {
            res.status(404)
            throw new Error("Turma não encontrada");

        }

        const docentes = result.map((docente: any) => {
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

export default buscarDocentePorTurma