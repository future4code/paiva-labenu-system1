import { Request, Response } from "express"
import { buscaPorID  } from "../data/buscaPorID"
import { removeTurma} from "../data/removeTurma"

export const removeDocenteTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.idDocente
      
        if (!id) {
            throw new Error("preencha o id do docente")
        }

        const idDocenteValidado = await buscaPorID(id, "docente")

        if (!idDocenteValidado) {
            res.status(404)
            throw new Error("docente não encontrada")
        }
        
        await removeTurma(id, "docente")

        res.status(200).send({message:"o docente foi removido na turma"})
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}