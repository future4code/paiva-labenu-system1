import { connection } from "./connection"

export async function filtraPorPassatempo(passatempo: string): Promise<any> {

    const resultado = await connection.raw(`
    SELECT labenu_system_estudante.nome, labenu_system_passatempo.nome AS "Hobbies dos estudantes"
    FROM  labenu_system_estudante_passatempo
    JOIN labenu_system_estudante
    ON estudante_id = labenu_system_estudante.id
    JOIN labenu_system_passatempo
    ON passatempo_id = labenu_system_passatempo.id
    WHERE labenu_system_passatempo.nome LIKE "%${passatempo}%"
    ORDER BY labenu_system_passatempo.nome ASC;
    `)

    return resultado[0]

}