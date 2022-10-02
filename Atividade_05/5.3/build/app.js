"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const banco_1 = require("./banco");
const conta_1 = require("./conta");
let input = (0, prompt_sync_1.default)();
let b = new banco_1.Banco();
let opcao = '';
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações ' +
        '0 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
        case "5":
            excluir();
            break;
        case "6":
            transferir();
            break;
        case "7":
            totalizacoes();
            break;
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");
function inserir() {
    console.log("\nCadastrar conta\n");
    let nomePessoa = input('Digite o nome do titular:');
    let numero = input('Digite o número da conta:');
    let conta;
    let pessoa = new conta_1.Pessoa(nomePessoa);
    conta = new conta_1.Conta(numero, 0, pessoa);
    b.inserir(conta);
}
function consultar() {
    console.log("\nConsultar conta\n");
    let numero = input('Digite o número da conta:');
    let conta = b.consultar(numero);
    return console.log(conta);
}
function sacar() {
    console.log("\Sacar\n");
    let valor = input('Digite o valor do Saque:');
    let numero = input('Digite o número da conta:');
    let saque = b.sacar(numero, parseInt(valor));
    return console.log(saque);
}
function depositar() {
    console.log("\depositar\n");
    let valor = input('Digite o valor do Deposito:');
    let numero = input('Digite o número da conta:');
    let deposito = b.depositar(numero, parseInt(valor));
    return console.log(deposito);
}
function excluir() {
    console.log("\Excluir\n");
    let numero = input('Digite o número da conta:');
    let excluir = b.excluir(numero);
    return console.log(excluir);
}
function transferir() {
    console.log("\Transferir\n");
    let valor = input('Digite o valor da transferencia:');
    let numeroOrigem = input('Digite o número da conta Origem:');
    let numeroDestino = input('Digite o número da conta Destino:');
    let transferir = b.transfeir(numeroOrigem, numeroDestino, parseInt(valor));
    return console.log(transferir);
}
function totalizacoes() {
    console.log("\Transferir\n");
    let total = b.totalDepositado();
    return `Valor Total Movimentado R$ ${total}`;
}
//# sourceMappingURL=app.js.map