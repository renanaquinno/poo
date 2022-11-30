"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
///import { Conta, Banco, Poupanca, ContaImposto } from "./cartao";
const input = (0, prompt_sync_1.default)();
//let b: Banco = new Banco();
//carregarDeArquivo();
let opcao = '';
do {
    console.log('\nBem vindo ao Sistema de Gerenciamento de Ações\nDigite uma opção:');
    console.log('1 - Cadastrar Ação      2 - Comprar Ação       3 - Vender Ações\n' +
        '4 - Cadastrar Dividendo      5 - Consultar Ações          9 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
    }
    input('Operação finalizada. Pressione <enter>');
} while (opcao != "9");
console.log("Aplicação encerrada");
// function cadastrar(): void {
//     console.log("\nCadastrar Cartao\n");
//     let numero: string = input('Digite o número da conta:');
//     let conta!: Conta;
//     let op: string = input('Você deseja criar uma conta, poupança ou conta imposto? c/p/i').toLowerCase();
//     if (op == 'c') {
//         conta = new Conta(numero, 0);
//     } else if (op == 'p') {
//         conta = new Poupanca(numero, 0, 0.5);
//     } else if (op == 'i') {
//         conta = new ContaImposto(numero, 0, 0.38);
//     }
//     b.inserir(conta);
// }
// function consultar() {
//     console.log("\nConsultar conta\n");
//     let numero: string = input('Digite o número da conta:');
//     let conta: Conta = b.consultar(numero);
//     exibirConta(numero);
// }
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
//     console.log(`Número: ${b.consultar(numero).numero} - Saldo: ${b.consultar(numero).saldo}`);
// }
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
