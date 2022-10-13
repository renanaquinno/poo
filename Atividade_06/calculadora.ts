class Calculadora {
    private operando: number;
    private operando_2: number;

    constructor(operando: number, operando_2: number) {
        this.operando = operando;
        this.operando_2 = operando_2;
    }

    somar(operando: number, operando_2: number) : number {
       return this.operando + this.operando_2;
    }
    
    subtrair(operando: number, operando_2: number) : number {
        if (this.operando < this.operando_2){
            return (this.operando_2 - this.operando);
        } else {
            return (this.operando - this.operando_2);
        }
    }
}

const c = new Calculadora(1,2);

console.log(c.somar());
console.log(c.subtrair());
c.operando = 20;
c.operando_2 = 40;
console.log(c.subtrair());