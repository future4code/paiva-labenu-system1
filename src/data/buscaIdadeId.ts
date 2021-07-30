import { connection } from "./connection"

export async function buscaIdadeId( id: string): Promise<any> {

    const resultado = await connection(`labenu_system_estudante`)
        .select("data_nasc")
        .where("id", "=", `${id}`)

    return resultado[0]
}