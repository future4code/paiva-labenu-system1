import { turma } from "../types/turma"
import { connection } from "./connection"

export async function inserirTurma( body:turma): Promise<any> {
    const { nome, dataInicio, dataFinal, modulo } = body



    const result = await connection("labenu_system_turma")
    .insert({nome, dataInicio, dataFinal, modulo })

    return result
}