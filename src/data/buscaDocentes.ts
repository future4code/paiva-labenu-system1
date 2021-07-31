import { estudante } from "../types/estudante";
import { connection } from "./connection";

const buscaDocentes = async (idTurma: string): Promise<any> => {

    const result = await connection('labenu_system_docente')
    .where('turma_id', '=', `${idTurma}`)

    return result

}

export default buscaDocentes;