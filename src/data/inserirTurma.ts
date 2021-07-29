import { turma } from "../types/turma"
import { connection } from "./connection"

export async function inserirTurma(
    nome: string,
    data_inicio: string,
    data_final: string,
    modulo: number
): Promise<void> {

    await connection("labenu_system_turma")
        .insert({
            id: Date.now().toString(),
            nome,
            data_inicio,
            data_final,
            modulo: `${modulo}`
        })

}