"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const Corretora_1 = require("./Corretora");
const Acao_1 = require("./Acao");
const TesouroDireto_1 = require("./TesouroDireto");
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
                console.log('1 - Cadastrar Ativo    2 - Editar Ativo    3 - Excluir Ativo  4 - Consultar Ativos  0 - Sair\n');
                opcao = input("Opção:");
                switch (opcao) {
                    case "1":
                        cadastrarAtivo();
                        break;
                    case "2":
                        editarAtivo();
                        break;
                    case "3":
                        excluirAtivo();
                        break;
                    case "4":
                        consultarAtivos();
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
                        consultarAtivos();
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
function cadastrarAtivo() {
    console.log("\nCadastrar Ativo\n");
    var tipo = input('Deseja Cadastrar Ação (A) ou Tesouro Direto (T): Digite A ou T ').toLocaleLowerCase();
    if (tipo == 'a') {
        cadastrarAcao();
    }
    else if (tipo == 't') {
        cadastrarTesouro();
    }
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
function cadastrarTesouro() {
    console.log("\nCadastrar Tesouro Direto\n");
    var tesouro;
    var nome = input('Digite o Nome do Tesuro: ');
    var vencimento = input('Digite a Data de vencimento DD/MM/AAAA: ');
    var valor_unitario = input('Digite o Valor Unitario: ');
    var taxa_retorno = input('Digite a Taxa de Retorno: ');
    tesouro = new TesouroDireto_1.TesouroDireto('0', nome, parseFloat(valor_unitario), vencimento, taxa_retorno);
    c.cadastrarTesouro(tesouro);
}
function consultarAtivos() {
    console.log("\nConsultar Ativos\n");
    console.log(c.listarAtivos());
}
function excluirAtivo() {
    console.log("\nExcluir Ativo\n");
    var tipo = input('Deseja Excluir Ação (A) ou Tesouro Direto (T): Digite A ou T ').toLocaleLowerCase();
    if (tipo == 'a') {
        excluirAcao();
    }
    else if (tipo == 't') {
        excluirTesouro();
    }
}
function excluirAcao() {
    console.log("\nExcluir Ação\n");
    let ticket = input('Digite o ticket da ação:');
    c.excluirAcao(ticket);
}
function excluirTesouro() {
    console.log("\nExcluir Tesouro\n");
    let nome_tesouro = input('Digite o Nome do Tesouro:');
    c.excluirTesouro(nome_tesouro);
}
function editarAtivo() {
    console.log("\nEditar Ativo\n");
    var tipo = input('Deseja Editar Ação (A) ou Tesouro Direto (T): Digite A ou T ').toLocaleLowerCase();
    if (tipo == 'a') {
        editarAcao();
    }
    else if (tipo == 't') {
        editar_Tesouro();
    }
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
function editar_Tesouro() {
    console.log("\nEditar Tesouro\n");
    let tesouro_editar = input('Nome do Tesouro: ');
    c.consultarTesouroNome(tesouro_editar);
    let edicao = input('\n Escolha uma opção \n1 - Editar Nome | 2 - Editar Valor | 3 - Editar Vencimento | 4 - Editar Rentabilidade \n');
    switch (edicao) {
        case "1":
            let nome = input('\nNovo Nome: ');
            c.editarNomeTesouro(tesouro_editar, nome);
            break;
        case "2":
            let valor = input('\nNovo Valor: ');
            c.editarValorTesouro(tesouro_editar, parseFloat(valor));
            break;
        case "3":
            let vencimento = input('\nNovo Vencimento: ');
            c.editarVencimentoTesouro(tesouro_editar, vencimento);
            break;
        case "4":
            let rentabilidade_anual = input('\nNova Rentabilidade Anual: ');
            c.editarRentabilidadeTesouro(tesouro_editar, rentabilidade_anual);
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
            let tipo = array[0];
            let nome = array[1];
            let acao;
            let tesouro;
            if (tipo == 'a') {
                let ticket = array[2];
                let valor = parseFloat(array[3]);
                acao = new Acao_1.Acao("0", nome, valor, ticket);
                c.cadastrarAcao(acao);
                console.log('Ação lida: ' + acao.nome_ativo);
            }
            else if (tipo == 't') {
                let valor = parseFloat(array[2]);
                let vencimento = array[3];
                let rentabilidade_anual = array[4];
                tesouro = new TesouroDireto_1.TesouroDireto("0", nome, valor, vencimento, rentabilidade_anual);
                c.cadastrarTesouro(tesouro);
                console.log('Tesouro lido: ' + tesouro.nome_ativo);
            }
        }
        else {
            console.log("Banco de Dados Inicializado com Sucesso!!");
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
