import { Request, Response } from "express"
import { alteraTurma } from "../data/alteraTurma"
import { buscaPorID  } from "../data/buscaPorID"

export const adicionaDocenteTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        const idTurma = req.params.idTurma
        const idDocente = req.body.id

        if (!idTurma) {
            throw new Error("preencha o id da turma")
        }

        if (!idDocente) {
            throw new Error("preencha o id do docente")
        }

        const idTurmaValidado = await buscaPorID(idTurma, "turma")

        if (!idTurmaValidado) {
            res.status(404)
            throw new Error("turma não encontrada")
        }

        const idDocenteValidado = await buscaPorID(idDocente, "docente")

        if (!idDocenteValidado) {
            res.status(404)
            throw new Error("docente não encontrada")
        }

        await alteraTurma(idTurma, idDocente)

        res.status(200).send("o docente foi adicionado na turma")
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}