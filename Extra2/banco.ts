
class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    public sacar(valor: number): void {
        if (this._saldo <= valor) {
            throw new Error("Saldo Insuficiente");
        } else if (valor < 0){
            throw new Error("Valor precisa ser maior que 0");
        }

        this._saldo = this._saldo - valor;
    }
    
    public depositar(valor: number): void {
        if (valor < 0 ){
            throw new Error("Valor precisa ser maior que 0")
        }
        this._saldo = this._saldo + valor;
    }

    public transferir(contaDestino: Conta, valor: number) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get numero(): string {
        return this._numero;
    }
}


class Poupanca extends Conta {
    private _taxaDejuros: number;

    public get taxaDeJuros(): number {
        return this._taxaDejuros;
    }

    constructor(numero: string, saldo: number, taxaDeJuros: number) {
        super(numero, saldo);
        this._taxaDejuros = taxaDeJuros;
    }

    public renderJuros() {
        let saldo = this.saldo;
        this.depositar(saldo * this.taxaDeJuros/100);
    }

}

class ContaImposto extends Conta {
    private _taxaDeDesconto: number;

    constructor(numero: string, saldo: number, taxaDeDesconto: number) {
        super(numero, saldo);
        this._taxaDeDesconto = taxaDeDesconto;
    }
    
    sacar(valor: number) {
       let valorTotal = valor + valor*this._taxaDeDesconto/100;
       super.sacar(valorTotal);
    }
}

class Banco {
    private _contas: Conta[] = [];

    inserir(conta: Conta) {
        this._contas.push(conta);
    }

    consultar(numero: string): Conta {
        let contaProcurada!: Conta;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                contaProcurada = this._contas[i];
            }
        }

        return contaProcurada;
    }

    private consultarComFilter(numero: string): Conta {
        return this._contas.filter(conta => conta.numero == numero)[0];
    }

    private consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indiceProcurado = i;
            }
        }

        return indiceProcurado;
    }


    alterar(conta: Conta) {
        let indice: number = this.consultarPorIndice(conta.numero);

        if (indice != -1) {
            this._contas[indice] = conta;
        }
    }

    depositar(numero: string, valor: number): void {
        let indice = this.consultarPorIndice(numero);

        if (indice != -1) {
            this._contas[indice].depositar(valor);
        }
    }

    sacar(numero: string, valor: number): void {
        let indice = this.consultarPorIndice(numero);

        if (indice != -1) {
            this._contas[indice].sacar(valor);
        }
    }

    excluir(numero: string): void {
        let indice: number = this.consultarPorIndice(numero);

        if (indice != -1) {
            for (var i = indice; i < this._contas.length; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number) {
		let contaCredito: Conta = this.consultar(numeroCredito);
		let contaDebito: Conta = this.consultar(numeroDebito);
		contaDebito.transferir(contaCredito, valor);
	}

	calcularQuantidadeContas(): number {
		return this._contas.length;
	}

	calcularTotalSaldos(): number {
		let totalSaldo: number = 0;
		for (let conta of this._contas) {
			totalSaldo += conta.saldo;
		}

		return totalSaldo;
	}

	calcularMediaSaldos() {
		return this.calcularTotalSaldos() / this.calcularQuantidadeContas();
	}

    renderJuros(numero: string) {
        let contaProcurada = this.consultar(numero);

        if (contaProcurada != null && contaProcurada instanceof Poupanca) {
            contaProcurada.renderJuros();
        }
    }

    
    listaContas(): string {
        let listaStrings = '';
        for(let i: number = 0; i < this._contas.length; i++) {
            listaStrings = listaStrings + 
                           ' Numero: ' + this._contas[i].numero +  
                           ' - Saldo: '  + this._contas[i].saldo + '\n';
                           
        }   

        return listaStrings;
    }
    
}


let b: Banco = new Banco();
let c: Conta = new Poupanca("1", 100, 0.5);
b.inserir(c);
b.renderJuros("1");
let c2 = b.consultar("1");
console.log(c);
console.log(c2);


export { Conta, Banco, Poupanca, ContaImposto }
