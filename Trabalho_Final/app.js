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
    console.log('1 - Cadastrar Ação      2 - Comprar Ação       3 - Vender Ações\n' +
        '4 - Cadastrar Dividendo      5 - Consultar Ações          9 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            //
            break;
        case "2":
            comprarAcao();
            break;
        case "3":
            //
            break;
        case "4":
            //
            break;
        case "5":
            //
            break;
        case "6":
            //
            break;
    }
    input('Operação finalizada. Pressione <enter>');
} while (opcao != "9");
console.log("Aplicação encerrada");
function comprarAcao() {
    console.log("\Comprar Ação\n");
    let ticket = input('Digite o ticket da ação: ');
    let valor_ordem = input('Digite o valor da ordem: ');
    let acao = [ticket, valor_ordem, 0];
    let id_conta = '1'; // CORRIGIR
    c.comprarAcao(id_conta, acao);
}
