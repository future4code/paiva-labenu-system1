import { app } from "./app";
import { adicionaDocenteTurma } from "./endpoints/adicionaDocenteTurma";
import { criarDocente } from "./endpoints/criarDocente";
import { criaTurma } from "./endpoints/criaTurma";
import { criaTabelas } from "./endpoints/geraTabelas";

app.post("/tabelas", criaTabelas)

app.post("/turma", criaTurma)
app.post("/docente", criarDocente)











app.put("/turma/docente/:idTurma", adicionaDocenteTurma)