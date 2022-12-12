"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Investidor = exports.Conta = void 0;
class Conta {
    constructor(nome, senha, saldo) {
        this.nome = nome;
        this._saldo = saldo;
        this._senha = senha;
    }
    get saldo() {
        return this._saldo;
    }
    get senha() {
        return this._senha;
    }
    atualizaSaldo(valor, tipo) {
        if (tipo == 1) {
            this._saldo += valor;
        }
        else if (tipo == 0) {
            this._saldo -= valor;
        }
        return this._saldo;
    }
}
exports.Conta = Conta;
class Investidor extends Conta {
    constructor(nome, senha, saldo) {
        super(nome, senha, saldo);
        //private _acaoComprada: AtivoComprado[] = []
        //private _tesouroComprado: AtivoComprado[] = []
        this._ativoComprado = [];
    }
    //////////////////// FUNÇÕES DE AÇÃO ////////////////////
    comprarAcao(ativo, valor_total) {
        console.log('comprarAcao');
        if (this.saldo <= valor_total) {
            throw new Error("Saldo Insuficiente");
        }
        else if (ativo.quantidade < 0) {
            throw new Error("Valor precisa ser maior que 0");
        }
        for (let i = 0; i < this._ativoComprado.length; i++) {
            if (ativo.nome_conta == this._ativoComprado[i].nome_conta && ativo.nome_ativo == this._ativoComprado[i].nome_ativo) {
                this._ativoComprado[i].quantidade += ativo.quantidade;
                this.atualizaSaldo(valor_total, 0);
                return;
            }
        }
        this._ativoComprado.push(ativo);
        // for (let i = 0; i < this._acaoComprada.length; i++) {
        //     if (ativo.nome_conta == this._acaoComprada[i].nome_conta && ativo.nome_ativo == this._acaoComprada[i].nome_ativo){
        //         this._acaoComprada[i].quantidade += ativo.quantidade; 
        //         this.atualizaSaldo(valor_total, 0);
        //         return;
        //     }
        // }
        // this._acaoComprada.push(ativo); 
        this.atualizaSaldo(valor_total, 0);
    }
    venderAcao(ativo, valor_total) {
        let indice = this.consultarPorIndiceAcao(ativo.nome_ativo);
        if (valor_total < 0) {
            throw new Error("Valor precisa ser maior que 0");
        }
        if (indice != -1) {
            if (ativo.quantidade == this._ativoComprado[indice].quantidade) {
                for (var i = indice; i < this._ativoComprado.length; i++) {
                    this._ativoComprado[i] = this._ativoComprado[i + 1];
                }
                this._ativoComprado.pop();
            }
            else {
                this._ativoComprado[indice].quantidade -= ativo.quantidade;
            }
            this.atualizaSaldo(valor_total, 1);
        }
        // if (indice != -1) {
        //     if (ativo.quantidade == this._acaoComprada[indice].quantidade){
        //         for (var i = indice; i < this._acaoComprada.length; i++) {
        //             this._acaoComprada[i] = this._acaoComprada[i + 1];
        //         } 
        //         this._acaoComprada.pop();
        //     } else {
        //         this._acaoComprada[indice].quantidade -= ativo.quantidade;
        //     }
        //     this.atualizaSaldo(valor_total, 1);
        // }
    }
    consultarPorIndiceAcao(nome) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._ativoComprado.length; i++) {
            if (this._ativoComprado[i].nome_ativo == nome) {
                indiceProcurado = i;
            }
        }
        // for (let i = 0; i < this._acaoComprada.length; i++) {
        //     if (this._acaoComprada[i].nome_ativo == nome) {
        //         indiceProcurado = i;
        //     }
        // }
        return indiceProcurado;
    }
    // carregarAcao(ativo: AtivoComprado): void {
    //     this._acaoComprada.push(ativo);
    // }
    //////////////////// FUNÇÕES DE TESOURO ////////////////////
    comprarTesouro(tesouro, valor_total) {
        valor_total = tesouro.quantidade * valor_total;
        if (this.saldo <= valor_total) {
            throw new Error("Saldo Insuficiente");
        }
        else if (tesouro.quantidade < 0) {
            throw new Error("Valor precisa ser maior que 0");
        }
        for (let i = 0; i < this._ativoComprado.length; i++) {
            if (tesouro.nome_conta == this._ativoComprado[i].nome_conta && tesouro.nome_ativo == this._ativoComprado[i].nome_ativo) {
                this._ativoComprado[i].quantidade += tesouro.quantidade;
                this.atualizaSaldo(valor_total, 0);
                return;
            }
        }
        this._ativoComprado.push(tesouro);
        // for (let i = 0; i < this._tesouroComprado.length; i++) {
        //     if (tesouro.nome_conta == this._tesouroComprado[i].nome_conta && tesouro.nome_ativo == this._tesouroComprado[i].nome_ativo){
        //         this._tesouroComprado[i].quantidade += tesouro.quantidade; 
        //         this.atualizaSaldo(valor_total, 0);
        //         return;
        //     }
        // }
        // this._tesouroComprado.push(tesouro); 
        this.atualizaSaldo(valor_total, 0);
    }
    venderTesouro(tesouro, valor_total) {
        let indice = this.consultarPorIndiceTesouro(tesouro.nome_ativo);
        if (valor_total < 0) {
            throw new Error("Valor precisa ser maior que 0");
        }
        if (indice != -1) {
            if (tesouro.quantidade == this._ativoComprado[indice].quantidade) {
                for (var i = indice; i < this._ativoComprado.length; i++) {
                    this._ativoComprado[i] = this._ativoComprado[i + 1];
                }
                this._ativoComprado.pop();
            }
            else {
                this._ativoComprado[indice].quantidade -= tesouro.quantidade;
            }
            this._ativoComprado.pop();
            this.atualizaSaldo(valor_total, 1);
        }
        // if (indice != -1) {
        //     if (tesouro.quantidade == this._tesouroComprado[indice].quantidade){
        //         for (var i = indice; i < this._tesouroComprado.length; i++) {
        //             this._tesouroComprado[i] = this._tesouroComprado[i + 1];
        //         } 
        //         this._tesouroComprado.pop();
        //     } else {
        //         this._tesouroComprado[indice].quantidade -= tesouro.quantidade;
        //     }
        //     this._tesouroComprado.pop();
        //     this.atualizaSaldo(valor_total, 1);
        // }
    }
    consultarPorIndiceTesouro(nome) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._ativoComprado.length; i++) {
            if (this._ativoComprado[i].nome_ativo == nome) {
                indiceProcurado = i;
            }
        }
        return indiceProcurado;
        // for (let i = 0; i < this._tesouroComprado.length; i++) {
        //     if (this._tesouroComprado[i].nome_ativo == nome) {
        //         indiceProcurado = i;
        //     }
        // }
        // return indiceProcurado;
    }
    // carregarTesouro(ativo: AtivoComprado): void {
    //     this._tesouroComprado.push(ativo);
    // }
    //////////////////// FUNÇÕES EXTRA ////////////////////
    carregarAtivo(ativo) {
        this._ativoComprado.push(ativo);
    }
    verCarteira(nome) {
        let ativo_procurado = [];
        for (let i = 0; i < this._ativoComprado.length; i++) {
            if (this._ativoComprado[i].nome_conta == nome) {
                ativo_procurado.push(this._ativoComprado[i]);
            }
        }
        return ativo_procurado;
    }
    atualizarBanco() {
        let listaStringsCarteiras = '';
        for (let i = 0; i < this._ativoComprado.length; i++) {
            listaStringsCarteiras = listaStringsCarteiras + this._ativoComprado[i].nome_conta + ';' + this._ativoComprado[i].nome_ativo + ';' + this._ativoComprado[i].quantidade + ';' + this._ativoComprado[i].tipo_ativo + '\n';
        }
        // for(let i: number = 0; i < this._acaoComprada.length; i++) {
        //     listaStringsCarteiras = listaStringsCarteiras + this._acaoComprada[i].nome_conta + ';' + this._acaoComprada[i].nome_ativo + ';' + this._acaoComprada[i].quantidade + ';A' +'\n';                 
        // }   
        // for(let i: number = 0; i < this._tesouroComprado.length; i++) {
        //     listaStringsCarteiras = listaStringsCarteiras + this._tesouroComprado[i].nome_conta + ';' + this._tesouroComprado[i].nome_ativo + ';' + this._tesouroComprado[i].quantidade +';T'+ '\n';                 
        // }   
        var carteiras = require('fs');
        carteiras.writeFile('carteira_' + this.nome + '.txt', listaStringsCarteiras, function (err) {
            if (err)
                throw err;
        });
    }
}
exports.Investidor = Investidor;
