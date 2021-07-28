import { Request, Response } from "express"
import { inserirTurma } from "../data/inserirTurma"


export const criaTurma = async (req: Request, res: Response): Promise<void> => {
   try {

      const { nome, dataInicio, dataFinal, modulo } = req.body

      if (!nome || !dataInicio || !dataFinal) {
         throw new Error("Preencha todas os campos obrigátorios(nomes data início e data final) ")
      }

      // validar nome

      if (modulo < 0 || modulo > 7) {
         throw new Error("Entre com um valor válido pra o modilo (0 a 7)")
      }

      const [diaI, mesI, anoI] = dataInicio.split("/")

      if(dataInicio.indexOf("/") === -1){
         throw new Error("A data inicial necessita ser no formato: `dia/mes/ano`)")
      }

      if (isNaN(diaI) || isNaN(mesI) || isNaN(anoI)){
         throw new Error("Entre com um valor númerico na data inicial )")
      }

      if (diaI > 31 || diaI < 0  || mesI > 12 || mesI< 0) {
         throw new Error("Entre com um data inicial válida)")
      }

      const [diaF, mesF, anoF] = dataFinal.split("/")

      if(dataFinal.indexOf("/") === -1){
         throw new Error("A data final necessita ser no formato: `dia/mes/ano`)")
      }

      if (isNaN(diaF) || isNaN(mesF) || isNaN(anoF)){
         throw new Error("Entre com um valor númerico na data final )")
      }

      if (diaF > 31 || mesF > 12) {
         throw new Error("Entre com um data final válida)")
      }

     // validar a diferença das datas usando o new Date

      const novaDataInicial:string = `${anoI}-${mesI}-${diaI}`
      const novaDataFinal:string = `${anoF}-${mesF}-${diaF}`

      // const result = await inserirTurma(req.body)


      res.status(200).send("turma criada com sucesso")

   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}