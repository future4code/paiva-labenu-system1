import { Request, Response } from "express"
import { buscaPorID } from "../data/buscaPorID"
import { deletaEstudante } from "../data/deletaEstudante"

export const deletarEstudante = async (
    req: Request,
    res: Response
) => {
    try {
        
        const idValidado: string | undefined = await buscaPorID(req.params.id, "estudante")

        if (!idValidado) {
            throw new Error("Estudante não encontrado")
        }

        await deletaEstudante(req.params.id)
    

        res.status(200).send({message: "Estudante deletado com sucesso"})

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}