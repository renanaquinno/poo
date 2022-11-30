class Acao extends Investimento {
    private _ticket: string;
    
    constructor(id:string, nome: string, valor: number, ticket: string) {
        super(id, nome, valor);
        this._ticket = ticket;
    }

}
