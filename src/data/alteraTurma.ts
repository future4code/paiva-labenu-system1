import { connection } from "./connection"

export async function alteraTurma(
    idTurma: string,
    idDocente: string,
    
): Promise<void> {

    await connection("labenu_system_docente")
        .update({ turma_id: idTurma })
        .where("id", "=", `${idDocente}`)
}