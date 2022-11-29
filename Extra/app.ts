import { CenarioDeBatalha, Guerreiro, BaseMilitar, ResultadoBatalha, Defensivel } from "./batalha";

// exército 1
let guerreiro1: Guerreiro = new Guerreiro(1, "soldado", 10);
let guerreiro2: Guerreiro = new Guerreiro(2, "marinheiro", 10);
let baseMilitar1: BaseMilitar = new BaseMilitar(3, 100, -100);

let exercito1: Defensivel[] = [guerreiro1, guerreiro2, baseMilitar1];

// exército 2
let guerreiro3: Guerreiro = new Guerreiro(3, "soldado", 10);
let guerreiro4: Guerreiro = new Guerreiro(4, "marinheiro", 10);
let baseMilitar2: BaseMilitar = new BaseMilitar(2, 100, -100);

let exercito2: Defensivel[] = [guerreiro3, guerreiro4, baseMilitar2];

try {
   guerreiro3.atacar(guerreiro1);
   guerreiro3.atacar(guerreiro1);
} catch (e: any) {
    console.log(e.message);
}

let cenario: CenarioDeBatalha = new CenarioDeBatalha();

console.log(cenario.avaliar(exercito1, exercito2));
