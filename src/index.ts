import { app } from "./app";
import { adicionaDocenteTurma } from "./endpoints/adicionaDocenteTurma";
import { adicionaEstudanteTurma } from "./endpoints/adicionaEstudanteTurma";
import buscarDocentePorTurma from "./endpoints/buscaDocentePorTurma";
import buscarEstudantePorTurma from "./endpoints/buscarEstudantePorTurma";
import { alterarModulo } from "./endpoints/alterarModulo";
import { criarDocente } from "./endpoints/criarDocente";
import criarEstudante from "./endpoints/criarEstudante";
import { criaTurma } from "./endpoints/criaTurma";
import { deletarEstudante } from "./endpoints/deletarEstudante";
import { criaTabelas } from "./endpoints/geraTabelas";
import { pegarIdadeEstudante } from "./endpoints/pegarIdadeEstudante";
import { removeDocenteTurma } from "./endpoints/removeDocenteTurma";
import { removeEstudanteTurma } from "./endpoints/removeEstudanteTurma";


app.post("/tabelas", criaTabelas)
app.post("/turma", criaTurma)
app.post("/docente", criarDocente)
app.post("/estudante", criarEstudante)


app.put("/turma/estudante/:idTurma", adicionaEstudanteTurma)
app.put("/turma/docente/:idTurma", adicionaDocenteTurma)
app.put("/turma/modulo/:id", alterarModulo)
app.put("/docente/remover/:idDocente", removeDocenteTurma)
app.put("/estudante/remover/:idEstudante", removeEstudanteTurma)

app.get('/estudante/turma/:id', buscarEstudantePorTurma)
app.get('/docente/turma/:id', buscarDocentePorTurma)
app.get("/estudante/idade/:id", pegarIdadeEstudante)

app.delete("/estudante/deletar/:id", deletarEstudante)



