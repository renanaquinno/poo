class Banco {
    private contas: Conta[] = [];

    inserir(conta: Conta) {
        if (this.contas.includes(conta)) {
            return false;
        } else {
            this.contas.push(conta);
            return true;
        }
    }

    alterar(conta: Conta): void {
        let indice = this.consultarIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }

    excluir(numero: String): void {
        let indice: number = this.consultarIndice(numero);
        if (indice != -1) {
            for (let i: number = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    consultar(numero: String): Conta {
        let contaProcurada!: Conta;
        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    }

    consultarIndice(numero: String): number {
        let indice: number = -1;
        for (let i: number = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }


    sacar(numero: string, valor: number): boolean{
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
            return true;
        } else {
            return false;
        }
    }

    depositar(numero: String, valor: number) {
        let conta: Conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }

    } 
    
    transfeir(numeroOrigem: string, numeroDestino: String, valor: number): void { 
        let c1: Conta = this.consultar(numeroOrigem);
        let c2: Conta = this.consultar(numeroDestino);
        c1.transferir(c2,valor)
    }

    totalContas(): number{
        return this.contas.length;
    }

    totalDepositado(): number{
        let total: number = 0;
        this.contas.forEach(element => {
            total += element.consultarSaldo();
        });
        return total;
    }

    mediaSaldo():number{
        return this.totalDepositado() / this.totalContas();
    }
   
}
