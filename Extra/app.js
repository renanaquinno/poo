"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const batalha_1 = require("./batalha");
// exército 1
let guerreiro1 = new batalha_1.Guerreiro(1, "soldado", 10);
let guerreiro2 = new batalha_1.Guerreiro(2, "marinheiro", 10);
let baseMilitar1 = new batalha_1.BaseMilitar(3, 100, -100);
let exercito1 = [guerreiro1, guerreiro2, baseMilitar1];
// exército 2
let guerreiro3 = new batalha_1.Guerreiro(3, "soldado", 10);
let guerreiro4 = new batalha_1.Guerreiro(4, "marinheiro", 10);
let baseMilitar2 = new batalha_1.BaseMilitar(2, 100, -100);
let exercito2 = [guerreiro3, guerreiro4, baseMilitar2];
try {
    guerreiro3.atacar(guerreiro1);
    guerreiro3.atacar(guerreiro1);
}
catch (e) {
    console.log(e.message);
}
let cenario = new batalha_1.CenarioDeBatalha();
console.log(cenario.avaliar(exercito1, exercito2));
