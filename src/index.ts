import { app } from "./app";
import { adicionaDocenteTurma } from "./endpoints/adicionaDocenteTurma";
import { adicionaEstudanteTurma } from "./endpoints/adicionaEstudanteTurma";
import { criarDocente } from "./endpoints/criarDocente";
import criarEstudante from "./endpoints/criarEstudante";
import { criaTurma } from "./endpoints/criaTurma";
import { criaTabelas } from "./endpoints/geraTabelas";
import { removeDocenteTurma } from "./endpoints/removeDocenteTurma";
import { removeEstudanteTurma } from "./endpoints/removeEstudanteTurma";

app.post("/tabelas", criaTabelas)

app.post("/turma", criaTurma)
app.post("/docente", criarDocente)
app.post("/estudante", criarEstudante)









app.put("/turma/estudante/:idTurma", adicionaEstudanteTurma)

app.put("/turma/docente/:idTurma", adicionaDocenteTurma)

app.put("/docente/remover/:idDocente", removeDocenteTurma)

app.put("/estudante/remover/:idEstudante", removeEstudanteTurma)