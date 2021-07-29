import { app } from "./app";
import { criarDocente } from "./endpoints/criarDocente";
import { criaTurma } from "./endpoints/criaTurma";



app.post("/turma", criaTurma)
app.post("/docente", criarDocente)