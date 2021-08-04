import { Request, Response } from "express"
import { inserirTurma } from "../data/inserirTurma"
import { ajustaData } from "../functions/ajustaData"


export const criaTurma = async (req: Request, res: Response): Promise<void> => {
   try {

      const { nome, dataInicio, dataFinal, modulo } = req.body

      if (!nome || !dataInicio || !dataFinal) {
         throw new Error("Preencha todas os campos obrigátorios(nomes data início e data final) ")
      }

      if (nome.length < 3) {
         throw new Error("o nome precisa ter no mínimo 3 caracteres")
      }

      if (modulo) {
         if (modulo < 0 || modulo > 7) {
            throw new Error("Entre com um valor válido pra o módulo (0 a 7)")
         }
      }

      const novaDataInicial: string = ajustaData(dataInicio)
      const novaDataFinal: string = ajustaData(dataFinal)

      const DI:Date = new Date(novaDataInicial)
      const DF:Date = new Date(novaDataFinal)

      if (DF < DI) {
         throw new Error("a data final deve ser depois da data inicial")
      }

      await inserirTurma(nome, novaDataInicial, novaDataFinal, modulo)

      res.status(200).send({message:"turma criada com sucesso"})
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}