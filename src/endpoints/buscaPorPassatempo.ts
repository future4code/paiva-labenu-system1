import { Request, Response } from "express"
import { filtraPorPassatempo } from "../data/filtraPorPassatempo"


export const buscaPorPassatempo = async (
    req: Request,
    res: Response
) => {
    try {
        const passatempo: any = req.query.nome ? req.query.nome : "%"

        const resultado = await filtraPorPassatempo(passatempo)

        if (resultado.length === 0) {
            res.status(404)
            throw new Error("nenhum passatempo encontrado")
        }

        res.status(200).send({ Result: resultado })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}