import { connection } from "./connection"

export async function modificaModulo(
    modulo: string,
    id: string,
): Promise<void> {

    await connection(`labenu_system_turma`)
        .update({ modulo: modulo })
        .where("id", "=", `${id}`)
}