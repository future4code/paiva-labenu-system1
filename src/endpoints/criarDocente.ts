// id, nome, email, data de nascimento
import { Request, Response } from "express"
import inserirDocente from "../data/inserirDocente"

export const criarDocente = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.body.nome || !req.body.email || !req.body.dataNasc) {
            res.status(400).send("Os campos 'nome', 'email' e 'data de nascimento' precisam ser preenchidos.")
        }

        const id: string = Date.now().toString()
        
        await inserirDocente(
            id,
            req.body.nome, 
            req.body.email,
            req.body.dataNasc
        )

        res.status(200).send("Docente adicionado com sucesso.")


    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}