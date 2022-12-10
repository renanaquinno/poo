import { AtivoComprado } from "./AtivoComprado";

class Conta {
    nome: string;
    private _saldo: number;
    private _acaoComprada: AtivoComprado[] = [];
    private _tesouroComprado: AtivoComprado[] = [];


    constructor(nome: string, saldo: number) {
        this.nome = nome;
        this._saldo = saldo;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public verCarteira(nome: string) {
        let ativo_procurado = [];
        for (let i = 0; i < this._acaoComprada.length; i++) {
            if (this._acaoComprada[i].nome_conta == nome) {
                ativo_procurado.push(this._acaoComprada[i]);
            }
        }

        for (let i = 0; i < this._tesouroComprado.length; i++) {
            if (this._tesouroComprado[i].nome_conta == nome) {
                ativo_procurado.push(this._tesouroComprado[i]);
            }
        }

        console.log(ativo_procurado);
        return ativo_procurado;
    }

    //////////////////// FUNÇÕES DE AÇÃO ////////////////////

    public comprarAcao(ativo: AtivoComprado, valor_total : number): void {
        let x: number = -1;
        valor_total = ativo.quantidade * valor_total;
        if (this._saldo <= valor_total) {
            throw new Error("Saldo Insuficiente");
        } else if (ativo.quantidade < 0){
            throw new Error("Valor precisa ser maior que 0");
        }

        for (let i = 0; i < this._acaoComprada.length; i++) {
            if (ativo.nome_conta == this._acaoComprada[i].nome_conta && ativo.nome_ativo == this._acaoComprada[i].nome_ativo){
                this._acaoComprada[i].quantidade += ativo.quantidade; 
                this._saldo -= valor_total;
                return;
            }
        }

        this._acaoComprada.push(ativo); 
        this._saldo -= valor_total;
    }

    public venderAcao(tesouro: AtivoComprado, valor_total : number): void {
        let indice: number = this.consultarPorIndiceAcao(tesouro.nome_ativo);
        if (valor_total < 0){           
            throw new Error("Valor precisa ser maior que 0");
        }

        if (indice != -1) {
            for (var i = indice; i < this._acaoComprada.length; i++) {
                this._acaoComprada[i] = this._acaoComprada[i + 1];
            }
            this._acaoComprada.pop();
            this._saldo += valor_total;
        }
    }

    public consultarPorIndiceAcao(nome: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._acaoComprada.length; i++) {
            if (this._acaoComprada[i].nome_ativo == nome) {
                indiceProcurado = i;
            }
        }
        return indiceProcurado;
    }

    carregarAcao(ativo: AtivoComprado): void {
        this._acaoComprada.push(ativo);
    }

    //////////////////// FUNÇÕES DE TESOURO ////////////////////
    public comprarTesouro(tesouro: AtivoComprado, valor_total : number): void {
        let x: number = -1;
        valor_total = tesouro.quantidade * valor_total;
        if (this._saldo <= valor_total) {
            throw new Error("Saldo Insuficiente");
        } else if (tesouro.quantidade < 0){
            throw new Error("Valor precisa ser maior que 0");
        }

        for (let i = 0; i < this._tesouroComprado.length; i++) {
            if (tesouro.nome_conta == this._tesouroComprado[i].nome_conta && tesouro.nome_ativo == this._tesouroComprado[i].nome_ativo){
                this._tesouroComprado[i].quantidade += tesouro.quantidade; 
                this._saldo -= valor_total;
                return;
            }
        }

        this._tesouroComprado.push(tesouro); 
        this._saldo -= valor_total;
    }

    public venderTesouro(tesouro: AtivoComprado, valor_total : number): void {
        let indice: number = this.consultarPorIndiceTesouro(tesouro.nome_ativo);
        if (valor_total < 0){           
            throw new Error("Valor precisa ser maior que 0");
        }

        if (indice != -1) {
            for (var i = indice; i < this._acaoComprada.length; i++) {
                this._acaoComprada[i] = this._acaoComprada[i + 1];
            }
            this._acaoComprada.pop();
            this._saldo += valor_total;
        }
    }

    public consultarPorIndiceTesouro(nome: string): number {
        let indiceProcurado: number = -1;
        for (let i = 0; i < this._acaoComprada.length; i++) {
            if (this._acaoComprada[i].nome_ativo == nome) {
                indiceProcurado = i;
            }
        }
        return indiceProcurado;
    }

    carregarTesouro(ativo: AtivoComprado): void {
        this._tesouroComprado.push(ativo);
    }

    //////////////////// FUNÇÕES EXTRA ////////////////////
    atualizarBanco(){
        let listaStringsCarteiras = ''
        for(let i: number = 0; i < this._acaoComprada.length; i++) {
            listaStringsCarteiras = listaStringsCarteiras + this._acaoComprada[i].nome_conta + ';' + this._acaoComprada[i].nome_ativo + ';' + this._acaoComprada[i].quantidade + '\n';                 
        }   

        for(let i: number = 0; i < this._tesouroComprado.length; i++) {
            listaStringsCarteiras = listaStringsCarteiras + this._tesouroComprado[i].nome_conta + ';' + this._tesouroComprado[i].nome_ativo + ';' + this._tesouroComprado[i].quantidade + '\n';                 
        }   
     
        var carteiras = require('fs');
        carteiras.writeFile('carteiras.txt', listaStringsCarteiras, function (err: any) {
            if (err) throw err;
        }); 
    }
}

export {Conta}