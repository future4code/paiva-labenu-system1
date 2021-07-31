import { estudante } from "../types/estudante";
import { connection } from "./connection";

const buscaEstudantes = async (idTurma: string): Promise<any> => {

    const result = await connection('labenu_system_estudante')
    .where('turma_id', '=', `${idTurma}`)

    return result

}

export default buscaEstudantes;