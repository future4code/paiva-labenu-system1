import { connection } from "./connection";

const inserirTurma = async (nome: string, email: string, newDate: string): Promise<any> => {

    const result = await connection('labenu_system_estudante')
    .insert({
        id: Date.now().toString(),
        nome,
        email,
        data_nasc: newDate,
        turma_id: "1"
    })

    return result
}

export default inserirTurma;