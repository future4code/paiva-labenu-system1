import { connection } from "./connection";

const buscaTabela = async (tabela: string): Promise<any> => {

    const result = await connection(`labenu_system_${tabela}`)
    

    return result

}

export default buscaTabela;