import { Request, Response } from "express"
import { buscaPorID } from "../data/buscaPorID"
import { modificaModulo } from "../data/modificaModulo"

export const alterarModulo = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id
        const modulo = req.body.modulo

        if (!id) {
            throw new Error("Preencha o id da turma")
        }

        const idValidado = await buscaPorID(id, "turma")

        if (!idValidado) {
            res.status(404)
            throw new Error("Turma não encontrada")
        }


        if (modulo === "0" || modulo === "1" || modulo === "2" || modulo === "3" || modulo === "4" || modulo === "5" || modulo === "6" || modulo === "7") {
            await modificaModulo(modulo, id)
            res.status(200).send({ message: "Módulo atualizado com sucesso" })

        } else {
            res.status(400)
            throw new Error("Esse módulo não é válido")
        }



    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}