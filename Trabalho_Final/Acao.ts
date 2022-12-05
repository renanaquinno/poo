class Acao extends Investimento {
    ticket: string;
    
    constructor(id: string, nome: string, valor: number, ticket: string) {
        super(id, nome, valor);
        this.ticket = ticket;
    }
}
