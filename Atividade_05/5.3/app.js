"use strict";
exports.__esModule = true;
var prompt_sync_1 = require("prompt-sync");
var input = (0, prompt_sync_1["default"])();
var b = new Banco();
var opcao = '';
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
        '4 - Depositar 5 - Excluir 6 - Transferir\n' +
        '7 – Totalizações' +
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
    var nomePessoa = input('Digite o nome do titular:');
    var numero = input('Digite o número da conta:');
    var conta;
    var pessoa = new Pessoa(nomePessoa);
    conta = new Conta(numero, 0, pessoa);
    b.inserir(conta);
}
function consultar() {
    console.log("\nConsultar conta\n");
    var numero = input('Digite o número da conta:');
    var conta = b.consultar(numero);
    return console.log(conta);
}
function sacar() {
    console.log("\Sacar\n");
    var valor = input('Digite o valor do Saque:');
    var numero = input('Digite o número da conta:');
    var saque = b.sacar(numero, parseInt(valor));
    return console.log(saque);
}
function depositar() {
    console.log("\depositar\n");
    var valor = input('Digite o valor do Deposito:');
    var numero = input('Digite o número da conta:');
    var deposito = b.depositar(numero, parseInt(valor));
    return console.log(deposito);
}
function excluir() {
    console.log("\Excluir\n");
    var numero = input('Digite o número da conta:');
    var excluir = b.excluir(numero);
    return console.log(excluir);
}
function transferir() {
    console.log("\Transferir\n");
    var valor = input('Digite o valor da transferencia:');
    var numeroOrigem = input('Digite o número da conta Origem:');
    var numeroDestino = input('Digite o número da conta Destino:');
    var transferir = b.transfeir(numeroOrigem, numeroDestino, parseInt(valor));
    return console.log(transferir);
}
function totalizacoes() {
    console.log("\Transferir\n");
    var total = b.totalDepositado();
    return console.log(total);
}
