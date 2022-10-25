class CalculadoraCientifica extends Calculadora {
    
    constructor(_operando: number, operando_2: number) {        
        super(_operando, operando_2);
    }

    exponenciar(_operando: number, _operando_2: number) : number {
        return (this.operando ** this.operando_2);
    }
}

const c2 = new CalculadoraCientifica(2,5);

console.log(c2.exponenciar());


// C. Foi necessária alguma modificação em Calculadora para o acesso aos atributos
// Não, apenas colocar a classe super