import { connection } from "./connection"

export async function buscaPorID( id: string, tabela:string): Promise<string | undefined> {

    const resultado = await connection(`labenu_system_${tabela}`)
        .select("id")
        .where("id", "=", `${id}`)

    return resultado[0]
}