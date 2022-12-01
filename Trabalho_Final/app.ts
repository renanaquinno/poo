import prompt from "prompt-sync";
import { Corretora } from "./Corretora";
const input = prompt();

let c: Corretora = new Corretora();
//carregarDeArquivo();

let opcao: String = '';

do {
    console.log('\nBem vindo ao Sistema de Gerenciamento de Ações\nDigite uma opção:');
    console.log('1 - Cadastrar Ação      2 - Comprar Ação       3 - Vender Ações\n' +
        '4 - Cadastrar Dividendo      5 - Consultar Ações          9 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            //
            break
        case "2":
            comprarAcao();
            break
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


function comprarAcao(): void {
    console.log("\Comprar Ação\n");
    let ticket: string = input('Digite o ticket da ação: ');
    let valor_ordem: string = input('Digite o valor da ordem: ');
    let acao: [string, string,number] = [ticket, valor_ordem,0];
    let id_conta: string = '1';     // CORRIGIR

    c.comprarAcao(id_conta,acao);
}
