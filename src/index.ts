import { app } from "./app";
import { adicionaDocenteTurma } from "./endpoints/adicionaDocenteTurma";
import { adicionaEstudanteTurma } from "./endpoints/adicionaEstudanteTurma";
import { criarDocente } from "./endpoints/criarDocente";
import criarEstudante from "./endpoints/criarEstudante";
import { criaTurma } from "./endpoints/criaTurma";
import { criaTabelas } from "./endpoints/geraTabelas";

app.post("/tabelas", criaTabelas)

app.post("/turma", criaTurma)
app.post("/docente", criarDocente)
app.post("/estudante", criarEstudante)









app.put("/turma/estudante/:idTurma", adicionaEstudanteTurma)

app.put("/turma/docente/:idTurma", adicionaDocenteTurma)