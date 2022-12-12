import { AtivoComprado } from "./AtivoComprado";
import { AtivoInexistenteError, QuantidadeInsuficienteError, SaldoInsuficienteError } from "./Erros";

abstract class Conta {
    nome: string;
    private _saldo: number;
    private _senha: string;

    constructor(nome: string, senha: string, saldo: number) {
        this.nome = nome;
        this._saldo = saldo;
        this._senha = senha;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get senha(): string {
        return this._senha;
    }

    public atualizaSaldo(valor: number, tipo: number): number {
        if (tipo == 1) {
            this._saldo += valor;
        } else if (tipo == 0) {
            this._saldo -= valor;
        }

        return this._saldo;
    }
}


class Investidor extends Conta {

    private _ativoComprado: AtivoComprado[] = []

    constructor(nome: string, senha: string, saldo: number) {
        super(nome, senha, saldo);
    }

    public operarAtivo(ativo: AtivoComprado, valor_total: number, tipo_operacao: string): void {
        if (tipo_operacao == 'COMPRAR') {
            if (this.saldo <= valor_total) {
                throw new SaldoInsuficienteError("Saldo Insuficiente");
            } else if (ativo.quantidade < 0) {
                throw new QuantidadeInsuficienteError("Quantidade precisa ser maior que 0");
            }

            for (let i = 0; i < this._ativoComprado.length; i++) {
                if (ativo.nome_conta == this._ativoComprado[i].nome_conta && ativo.nome_ativo == this._ativoComprado[i].nome_ativo) {
                    this._ativoComprado[i].quantidade += ativo.quantidade;
                    this.atualizaSaldo(valor_total, 0);
                    return;
                }
            }

            this._ativoComprado.push(ativo);
            this.atualizaSaldo(valor_total, 0);
        } else {
            let indice: number = this.consultarPorIndiceAcao(ativo.nome_ativo);
            if (valor_total < 0) {
                throw new QuantidadeInsuficienteError("Quantidade precisa ser maior que 0");
            }
    
            if (indice != -1) {
                if (ativo.quantidade == this._ativoComprado[indice].quantidade) {
                    for (var i = indice; i < this._ativoComprado.length; i++) {
                        this._ativoComprado[i] = this._ativoComprado[i + 1];
                    }
                    this._ativoComprado.pop();
                } else {
                    this._ativoComprado[indice].quantidade -= ativo.quantidade;
                }
    
                this.atualizaSaldo(valor_total, 1);
            } else {
                throw new AtivoInexistenteError("Você Não Possui Esse Ativo em Sua Carteira!");

            }
        }
    }

    public consultarPorIndiceAcao(nome: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._ativoComprado.length; i++) {
            if (this._ativoComprado[i].nome_ativo == nome) {
                indiceProcurado = i;
            }
        }

        return indiceProcurado;
    }

    public consultarPorIndiceTesouro(nome: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._ativoComprado.length; i++) {
            if (this._ativoComprado[i].nome_ativo == nome) {
                indiceProcurado = i;
            }
        }
        return indiceProcurado;
    }

    //////////////////// FUNÇÕES EXTRA ////////////////////
    carregarAtivo(ativo: AtivoComprado): void {
        this._ativoComprado.push(ativo);
    }

    public verCarteira(nome: string) {
        let ativo_procurado = [];
        for (let i = 0; i < this._ativoComprado.length; i++) {
            if (this._ativoComprado[i].nome_conta == nome) {
                ativo_procurado.push(this._ativoComprado[i]);
            }
        }

        return ativo_procurado;
    }

    atualizarBanco() {
        let listaStringsCarteiras = ''
        for (let i: number = 0; i < this._ativoComprado.length; i++) {
            listaStringsCarteiras = listaStringsCarteiras + this._ativoComprado[i].nome_conta + ';' + this._ativoComprado[i].nome_ativo + ';' + this._ativoComprado[i].quantidade + ';' + this._ativoComprado[i].tipo_ativo + '\n';
        }

        var carteiras = require('fs');
        carteiras.writeFile('carteira_' + this.nome + '.txt', listaStringsCarteiras, function (err: any) {
            if (err) throw err;
        });
    }
}

export { Conta, Investidor }