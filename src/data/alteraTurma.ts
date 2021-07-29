import { connection } from "./connection"

export async function alteraTurma(
    idTurma: string,
    id: string,
    tabela: string    
): Promise<void> {

    await connection(`labenu_system_${tabela}`)
        .update({ turma_id: idTurma })
        .where("id", "=", `${id}`)
}