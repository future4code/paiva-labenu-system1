import { connection } from "./connection";

export default async function inserirDocente(
    id: string,
    nome: string,
    email: string,
    dataNasc: Date
) {
    await connection.raw(`
     INSERT INTO labenu_system_docente (id, nome, email, data_nasc, turma_id)
     VALUES ('${id}', '${nome}', '${email}', '${dataNasc}', '1');
    `)
}
