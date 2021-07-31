import { Request, Response } from "express-serve-static-core"
import moment from "moment";
import buscaEstudantes from "../data/buscaEstudantes";
import { estudante } from "../types/estudante";

const buscarEstudantePorTurma = async(req: Request, res: Response) => {

try {

    const idTurma = req.params.id

    if (!idTurma) {
        throw new Error("Insira uma turma");
        
    }

    const result = await buscaEstudantes(idTurma)
    
    if (!result) {
        res.status(404)
        throw new Error("Turma não encontrada");
        
    }

    const estudantes = result.map((estudante: estudante) => {
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

export default buscarEstudantePorTurma