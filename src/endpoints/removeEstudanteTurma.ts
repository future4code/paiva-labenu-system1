import { Request, Response } from "express"
import { buscaPorID  } from "../data/buscaPorID"
import { removeTurma} from "../data/removeTurma"

export const removeEstudanteTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.idEstudante
      
        if (!id) {
            throw new Error("preencha o id do estudante")
        }

        const idDocenteValidado = await buscaPorID(id, "estudante")

        if (!idDocenteValidado) {
            res.status(404)
            throw new Error("estudante não encontrada")
        }
        
        await removeTurma(id, "estudante")

        res.status(200).send("o estudante foi removido na turma")
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}