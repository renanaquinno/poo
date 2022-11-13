class Conta {
    private _nome: string;
    private _saldo: number;

    constructor(nome: string, saldo:number){
        this._nome = nome;
        this._saldo = saldo;
    }

    public get Nome(): string{
        return this._nome;
    }

    setNome(nome:string): void{
        this._nome = nome;
    }

    public get Saldo(): number{
        return this._saldo;
    }

    setSaldo(saldo:number): void{
        this._saldo = saldo;
    }
}


interface Tributavel {
    calculaTributos(): number;
}

class ContaCorrente extends Conta implements Tributavel{
    constructor(nome:string, saldo:number){
        super(nome,saldo);
    }

    calculaTributos(){
        return (this.Saldo * 1.10)
    }
}

class SeguroDeVida implements Tributavel{
    calculaTributos(){
        return 50;
    }
}

class AuditoriaInterna implements Tributavel {
    let tributaveis: Tributavel[] = new Array();
    let total = 0;
    constructor(tributaveis: Tributavel, total){
        this.tributaveis = tributaveis;
        this.total = total;
    }

    adicionar(tributaveis: Tributavel){
        this.tributaiveis.push(tributaveis);
    }

    calculaTributos():number{
        tributaveis.forEach(element => {
            total += calculaTributos(element);
        });
    }
}