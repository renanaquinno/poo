class Veiculo {
    private _placa: string;
    private _ano: number;

    constructor(placa: string, ano: number) {
     
        this._placa = placa;
        this._ano = ano;
    }

    get placa(): string {
        return this.placa;
    }

    get ano(): number {
        return this._ano;
    }

}

class Carro extends Veiculo {
    private _modelo: string;

    constructor(placa: string, ano: number, modelo: string) {
        super(placa, ano);
        this._modelo = modelo;
    }

    get modelo(): string {
        return this.modelo;
    }
}

class CarroEletrico extends Carro {
    private _autonomiaBateria: number;

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomiaBateria;
        
    }

    get autonomiaBateria(): number {
        return this._autonomiaBateria;
    }
}


let ce: CarroEletrico = new CarroEletrico("zzz-1090", 2020, "tesla", 400);

class Calculadora {
    private _op1: number;
    private _op2: number;

    constructor(op1: number, op2: number) {
        this._op1 = op1;
        this._op2 = op2;
    }

    somar(): number {
        return this._op1 + this._op2;
    }

    get op1(): number {
        return this._op1;
    }

    get op2(): number {
        return this._op2;
    }

}

class CalculadoraCientifica  extends Calculadora {
    exponenciar(): number {
        return this.op1**this.op2;
    }
}


let calculadora: Calculadora = new Calculadora(1,2);
console.log(calculadora.somar());

let cc: Calculadora = new CalculadoraCientifica(2,3);
if (cc instanceof CalculadoraCientifica) {
    console.log((<CalculadoraCientifica>cc).exponenciar());
}

