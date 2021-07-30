import { Request, Response } from "express"
import { buscaIdadeId } from "../data/buscaIdadeId"
import { buscaPorID } from "../data/buscaPorID"

export const pegarIdadeEstudante = async (
    req: Request,
    res: Response
) => {
    try {
        
        const idValidado: string | undefined = await buscaPorID(req.params.id, "estudante")

        if (!idValidado) {
            throw new Error("Estudante não encontrado")
        }

        const resultado = await buscaIdadeId(req.params.id)
        const data: Date = resultado.data_nasc

        const idadeMilisseg: number = Date.now() - data.getTime()
        const idade: number = Math.floor(idadeMilisseg / 1000 / 60 / 60 / 24 / 365)

        res.status(200).send({idade})

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}