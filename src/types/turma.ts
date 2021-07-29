export type turma = {
    nome: string
    dataInicio: string
    dataFinal: string
    modulo: MODULO
}

export enum MODULO {
    ZERO = 0,
    UM = 1,
    DOIS = 2,
    TRES = 3,
    QUATRO =4,
    CINCO=5,
    SEIS=6,
    SETE=7
}