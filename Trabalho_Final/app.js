"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const input = (0, prompt_sync_1.default)();
let opcao = '';
do {
    console.log('\nBem vindo ao Sistema de Gerenciamento de Cartões\nDigite uma opção:');
    console.log('1 - Cadastrar Cartão      2 - Consultar Cartão       3 - Consultar Debitos\n' +
        '4 - Cadastrar Débito      5 - Pagar Fatura           6 - Excluir Cartão\n' +
        '9 - Sair\n');
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
        case "6":
            break;
    }
    input('Operação finalizada. Pressione <enter>');
} while (opcao != "9");
console.log("Aplicação encerrada");
