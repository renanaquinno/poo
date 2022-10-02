import prompt from 'prompt-sync';
import {Banco} from './banco';
import {Conta, Pessoa} from './conta';

let input = prompt();
let b: Banco = new Banco();
let opcao: String = '';
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
            break
        case "2":
            consultar();
            break
        case "3":
            sacar();
            break
        case "4":
            depositar();
            break
        case "5":
            excluir();
            break
        case "6":
            transferir();
            break
        case "7":
            totalizacoes();
            break
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");

function inserir(): void {
    console.log("\nCadastrar conta\n");
    let nomePessoa: string = input('Digite o nome do titular:');
    let numero: string = input('Digite o número da conta:');
    let conta: Conta;
    let pessoa: Pessoa = new Pessoa(nomePessoa);
    conta = new Conta(numero, 0, pessoa);
    b.inserir(conta);
}

function consultar(): void {
    console.log("\nConsultar conta\n");
    let numero: string = input('Digite o número da conta:');
    let conta = b.consultar(numero);
    return console.log(conta);
}

function sacar(): void {
    console.log("\Sacar\n");
    let valor: string = input('Digite o valor do Saque:');
    let numero: string = input('Digite o número da conta:');
    let saque = b.sacar(numero, parseInt(valor));
    return console.log(saque);
}

function depositar(): void {
    console.log("\depositar\n");
    let valor: string = input('Digite o valor do Deposito:');
    let numero: string = input('Digite o número da conta:');
    let deposito = b.depositar(numero, parseInt(valor));
    return console.log(deposito);
}

function excluir(): void {
    console.log("\Excluir\n");
    let numero: string = input('Digite o número da conta:');
    let excluir = b.excluir(numero);
    return console.log(excluir);
}

function transferir(): void {
    console.log("\Transferir\n");
    let valor: string = input('Digite o valor da transferencia:');
    let numeroOrigem: string = input('Digite o número da conta Origem:');
    let numeroDestino: string = input('Digite o número da conta Destino:');
    let transferir = b.transfeir(numeroOrigem,numeroDestino, parseInt(valor));
    return console.log(transferir);
}

function totalizacoes(): string{
    console.log("\Transferir\n");
    let total = b.totalDepositado();
    return `Valor Total Movimentado R$ ${total}`;
}