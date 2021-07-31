import { Request, Response } from "express-serve-static-core"
import buscaEstudantes from "../data/buscaEstudantes";

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

    res.status(200).send(result)
} catch (error) {
    res.status(404).send(error.message || error.sqlMessage)
}


}

export default buscarEstudantePorTurma