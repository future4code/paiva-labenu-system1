import { Request, Response } from "express"
import { alteraTurma } from "../data/alteraTurma"

import { buscaPorID  } from "../data/buscaPorID"

export const adicionaEstudanteTurma = async (req: Request, res: Response): Promise<void> => {
    try {
        const idTurma = req.params.idTurma
        const idEstudante = req.body.id

        if (!idTurma) {
            throw new Error("preencha o id da turma")
        }

        if (!idEstudante) {
            throw new Error("preencha o id do estudante")
        }

        const idTurmaValidado = await buscaPorID(idTurma, "turma")

        if (!idTurmaValidado) {
            res.status(404)
            throw new Error("turma não encontrada")
        }

        const idEstudanteValidado = await buscaPorID(idEstudante, "estudante")

        if (!idEstudanteValidado) {
            res.status(404)
            throw new Error("estudante não encontrado")
        }

        await alteraTurma(idTurma, idEstudante, "estudante")

        res.status(200).send("o estudante foi adicionado a turma")
    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}