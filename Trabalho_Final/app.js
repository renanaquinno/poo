"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Corretora_1 = require("./Corretora");
const Acao_1 = require("./Acao");
const input = (0, prompt_sync_1.default)();
let c = new Corretora_1.Corretora();
//let contas: Conta[] = []
carregarDeArquivo();
let opcao = '';
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
            break;
    }
} while (opcao != "9");
atualizarBancoDeDados();
input('Operação finalizada. Pressione <enter>');
function atualizarBancoDeDados() {
    c.atualizarBancoDeDados();
}
function cadastrarAcao() {
    console.log("\nCadastrar Ação\n");
    var acao;
    var nome = input('Digite o Nome da Empresa: ');
    var ticket = input('Digite o Ticket: ');
    var valor = input('Digite o Valor: ');
    acao = new Acao_1.Acao('0', nome, parseFloat(valor), ticket);
    c.cadastrarAcao(acao);
}
function consultarAcoes() {
    console.log("\nConsultar Ações\n");
    console.log(c.listarAcoes());
}
function excluirAcao() {
    console.log("\nExcluir Ação\n");
    let ticket = input('Digite o ticket da ação:');
    c.excluirAcao(ticket);
}
function editarAcao() {
    console.log("\nEditar Ação\n");
    let ticket_editar = input('Ticket da Ação: ');
    c.consultarAcaoTicket(ticket_editar);
    let edicao = input('\n Escolha uma opção \n1 - Editar Nome | 2 - Editar Ticket | 3 - Editar Valor \n');
    switch (edicao) {
        case "1":
            let nome = input('\nNovo Nome: ');
            c.editarNomeAcao(ticket_editar, nome);
            break;
        case "2":
            let ticket = input('\nNovo Ticket: ');
            c.editarTicketAcao(ticket_editar, ticket);
            break;
        case "3":
            let valor = input('\nNovo Valor: ');
            c.editarPrecoAcao(ticket_editar, parseFloat(valor));
            break;
    }
}
function comprarAcao() {
    console.log("\nComprar Ação\n");
    let ticket = input('Digite o ticket da ação: ');
    let valor_ordem = input('Digite a quantidade de ações: ');
    let acao = [ticket, '0', 0];
    let id_conta = '1'; // CORRIGIR
    c.comprarAcao(id_conta, acao);
}
function venderAcao() {
    console.log("\nVender Ação\n");
    let ticket = input('Digite o ticket da ação: ');
    let valor_ordem = input('Digite o valor da ordem: ');
    let acao = [ticket, '0', 0];
    let id_conta = '1'; // CORRIGIR
    c.venderAcao(id_conta, acao);
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
        let linha = lrs.readline();
        if (linha != null) {
            let array = linha.split(";");
            let nome = array[0];
            let ticket = array[1];
            let valor = parseFloat(array[2]);
            let acao;
            acao = new Acao_1.Acao("0", nome, valor, ticket);
            c.cadastrarAcao(acao);
            console.log('Ação lida: ' + acao.ticket);
        }
        else {
            console.log("fim do arquivo");
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
