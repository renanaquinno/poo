import prompt from "prompt-sync";
import { Corretora } from "./Corretora";
import { Acao } from "./Acao";
const input = prompt();

let c: Corretora = new Corretora();
//let contas: Conta[] = []

carregarDeArquivo();

let opcao: String = '';
do {
    console.log('\nFazer Login \nDigite uma opção:');
    console.log('1 - Logar Como Corretora    2 - Logar Como Investidor    9 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            do {
                console.log('\nBem vindo ao Sistema de Gerenciamento de Ações - Corretora\nDigite uma opção:');
                console.log('1 - Cadastrar Ação    2 - Editar Ação    3 - Excluir Ação  4 - Consultar Ação  0 - Sair\n');
                opcao = input("Opção:");
                switch (opcao) {
                    case "1":
                        cadastrarAcao();
                        break;
                    case "2":
                        editarAcao();
                        break;
                    case "3":
                        excluirAcao();
                        break;
                    case "4":
                        consultarAcoes();
                        break;
                }
            } while (opcao != "0");
            break;
        case "2":
            do {
                console.log('\nBem vindo ao Sistema de Gerenciamento de Ações - Investidor\nDigite uma opção:');
                console.log('1 - Comprar Ação    2 - Vender Ações    3 - Consultar Ações    0 - Sair\n');
                opcao = input("Opção:");
                switch (opcao) {
                    case "1":
                        comprarAcao();
                        break;
                    case "2":
                        venderAcao();
                        break;
                    case "3":
                        consultarAcoes();
                        break;
                }
            } while (opcao != "0");
            break
    }
} while (opcao != "9");

atualizarBancoDeDados();
input('Operação finalizada. Pressione <enter>');

function atualizarBancoDeDados(){
    c.atualizarBancoDeDados();
}

function cadastrarAcao(){
    console.log("\nCadastrar Ação\n");
    var acao!: Acao;
    var nome: string = input('Digite o Nome da Empresa: ');
    var ticket: string = input('Digite o Ticket: ');
    var valor: string = input('Digite o Valor: ');
    acao = new Acao('0', nome, parseFloat(valor), ticket);
    c.cadastrarAcao(acao);
}

function consultarAcoes() {
    console.log("\nConsultar Ações\n");
    console.log(c.listarAcoes());
}

function excluirAcao() {
    console.log("\nExcluir Ação\n");
    let ticket: string = input('Digite o ticket da ação:');
    c.excluirAcao(ticket);
}

function editarAcao(){
    console.log("\nEditar Ação\n");
    let ticket_editar: string = input('Ticket da Ação: ');
    c.consultarAcaoTicket(ticket_editar);

    let edicao: string = input('\n Escolha uma opção \n1 - Editar Nome | 2 - Editar Ticket | 3 - Editar Valor \n');
    switch(edicao){
        case "1":
            let nome: string = input('\nNovo Nome: ');
            c.editarNomeAcao(ticket_editar, nome);
            break;
        case "2":
            let ticket: string = input('\nNovo Ticket: ');
            c.editarTicketAcao(ticket_editar, ticket);
            break;
        case "3":
            let valor: string = input('\nNovo Valor: ');
            c.editarPrecoAcao(ticket_editar, parseFloat(valor));
            break;
    }
}

function comprarAcao(): void {
    console.log("\nComprar Ação\n");
    let ticket: string = input('Digite o ticket da ação: ');
    let valor_ordem: string = input('Digite a quantidade de ações: ');
    let acao: [string, string, number] = [ticket, '0', 0];
    
    let id_conta: string = '1';     // CORRIGIR
    c.comprarAcao(id_conta,acao);
}

function venderAcao(): void {
    console.log("\nVender Ação\n");
    let ticket: string = input('Digite o ticket da ação: ');
    let valor_ordem: string = input('Digite o valor da ordem: ');
    let acao: [string, string, number] = [ticket, '0', 0];
    
    let id_conta: string = '1';     // CORRIGIR
    c.venderAcao(id_conta,acao);
}


// function sacar() {
//     console.log("\nSacar\n");
//     let numero: string = input('Digite o número da conta:');
//     let valorStr: string = input('Digite o valor do saque:');
//     let valor: number = parseFloat(valorStr);
//     b.sacar(numero, valor);
//     exibirConta(numero);
// }
// function depositar() {
//     console.log("\nDepositar\n");
//     let numero: string = input('Digite o número da conta:');
//     let valorStr: string = input('Digite o valor do depósito:');
//     let valor: number = parseFloat(valorStr);
//     b.depositar(numero, valor);
//     exibirConta(numero);
// }

// function excluir() {
//     console.log("\nExcluir conta\n");
//     let numero: string = input('Digite o número da conta:');
//     b.excluir(numero);
// }

// function transferir() {
//     console.log("\nTransferir\n");
//     let numeroDebito: string = input('Digite o número da conta de origem:');
//     let numeroCredito: string = input('Digite o número da conta de destino:');
//     let valorStr: string = input('Digite o valor do depósito:');
//     let valor: number = parseFloat(valorStr);
//     b.transferir(numeroDebito, numeroCredito, valor);
//     exibirConta(numeroDebito);
//     exibirConta(numeroCredito);
// }

// function exibirConta(numero: string): void {
//     console.log(`Número: ${c.consultarConta(numero).id} - Saldo: ${c.consultarConta(numero).saldo} - Ações: ${c.consultarConta(numero).ativos}`);
// }

function carregarDeArquivo() {
    let LineReaderSync = require("line-reader-sync");
    let lrs = new LineReaderSync("./bd.txt");
    console.log("Iniciando leitura de arquivo");
    while (true) {
        let linha: string = lrs.readline();
        if (linha != null) {
            let array: string[] = linha.split(";");
            let nome: string = array[0];
            let ticket: string = array[1];
            let valor: number = parseFloat(array[2]);
            let acao!: Acao;

            acao = new Acao("0", nome, valor, ticket);
            c.cadastrarAcao(acao);
            console.log('Ação lida: ' + acao.ticket);
        } else {
            console.log("fim do arquivo")
            break;
        }
    }
}

// function renderJuros() {
//     console.log("\Render Juros\n");
//     let numero: string = input('Digite o número da poupança:');
//     b.renderJuros(numero);
// }

// function listarContas() {
//     console.log(b.listaContas());
    
// }