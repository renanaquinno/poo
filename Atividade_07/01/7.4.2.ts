class Pessoa {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

class Conta {
    private numero: string;
    private saldo: number;
    cliente: Pessoa;

    constructor(private _numero: string, private _saldo: number, cliente: Pessoa) {
        this.numero = _numero;
        this.saldo = _saldo;
        this.cliente = cliente;
    }

    sacar(valor: number): boolean {
        if ((this.saldo - valor) < 0) {
            return false;
        } else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    get saldo(): number {
        return this._saldo;
    }

    get nomeCliente() {
        return this.cliente.nome;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        } else {
            return false;
        }
    }

    equals(conta: Conta): boolean {
        return (this.numero == conta.numero &&
            this.cliente.nome == conta.cliente.nome);
    }
}


class Poupanca extends Conta {
    private _taxaJuros : number;
   
    constructor(numero: string, saldo: number, cliente: Pessoa,taxaJuros: number) {
        super(numero, saldo, cliente);
        this._taxaJuros = taxaJuros;
    }

    renderJuros(): number{
        return (this._taxaJuros * this.saldo)/100;
    }
}
