import { connection } from "./connection"

export async function deletaEstudante( id: string): Promise<any> {

    await connection(`labenu_system_estudante`)
        .delete()
        .where("id", "=", `${id}`)

}