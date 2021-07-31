import { connection } from "./connection"

export async function removeTurma(
    id: string,
    tabela: string
): Promise<void> {

    await connection(`labenu_system_${tabela}`)
        .update({ turma_id: 1 })
        .where("id", "=", `${id}`)
}