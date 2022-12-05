"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Corretora_1 = require("./Corretora");
const input = (0, prompt_sync_1.default)();
let c = new Corretora_1.Corretora();
//carregarDeArquivo();
let opcao = '';
do {
    console.log('\nBem vindo ao Sistema de Gerenciamento de Ações\nDigite uma opção:');
    console.log('1 - Comprar Ação     2 - Vender Ações          3 - Consultar Ações\n' +
        '4 - Cadastrar Ação   5 - Cadastrar Dividendo   9 - Sair\n');
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
        case "4":
            break;
        case "5":
            break;
        case "6":
            break;
    }
    input('Operação finalizada. Pressione <enter>');
} while (opcao != "9");
console.log("Aplicação encerrada");
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
function consultarAcoes() {
    console.log("\nConsultar Ações\n");
    let numero = input('Digite o número da conta:');
    exibirConta(numero);
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
function exibirConta(numero) {
    console.log(`Número: ${c.consultarConta(numero).id} - Saldo: ${c.consultarConta(numero).saldo} - Ações: ${c.consultarConta(numero).ativos}`);
}
// function carregarDeArquivo() {
//     let LineReaderSync = require("line-reader-sync");
//     let lrs = new LineReaderSync("./contas.txt");
//     console.log("Iniciando leitura de arquivo");
//     while (true) {
//         let linha: string = lrs.readline();
//         if (linha != null) {
//             let array: string[] = linha.split(";");
//             let tipo: string = array[0];
//             let numero: string = array[1];
//             let saldo: number = parseFloat(array[2]);
//             let conta!: Conta;
//             if (tipo == 'C') {
//                 conta = new Conta(numero, saldo);
//             } else if (tipo == 'P') {
//                 let taxaDeJuros: number = parseFloat(array[3]);
//                 conta = new Poupanca(numero, saldo, taxaDeJuros);
//             } else if (tipo == 'CI') {
//                 let taxaDeDesconto: number = parseFloat(array[3]);
//                 conta = new ContaImposto(numero, saldo, taxaDeDesconto);
//             }
//             b.inserir(conta);
//             console.log('Conta lida: ' + conta.numero);
//         } else {
//             console.log("fim do arquivo")
//             break;
//         }
//     }
// }
// function renderJuros() {
//     console.log("\Render Juros\n");
//     let numero: string = input('Digite o número da poupança:');
//     b.renderJuros(numero);
// }
// function listarContas() {
//     console.log(b.listaContas());
// }
