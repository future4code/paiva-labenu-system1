import { app } from "./app";
import criarEstudante from "./endpoints/criarEstudante";
import { criaTurma } from "./endpoints/criaTurma";















app.post("/turma", criaTurma)
app.post("/estudante", criarEstudante)