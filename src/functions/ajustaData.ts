export const ajustaData = (data:string):string => {

    const [dia, mes, ano] = data.split("/")

    if(data.indexOf("/") === -1 || data.length !== 10){
       throw new Error("A data necessita ser no formato: `dd/mm/aaaa`)")
    }

    if (isNaN(Number(dia)) || isNaN(Number(mes)) || isNaN(Number(ano))){
       throw new Error("Entre com um valor númerico na data ")
    }

    if (Number(dia) > 31 || Number(dia) < 0  || Number(mes) > 12 || Number(mes) < 0 || Number(ano)< 0) {
       throw new Error("Entre com um valor válido para a data")
    }

return `${ano}-${mes}-${dia}`
}