import prompt from "prompt-sync";
import { Corretora } from "./Corretora";
import { Acao } from "./Acao";
import { TesouroDireto } from "./TesouroDireto";
import { Conta } from "./Conta";
import { AtivoComprado } from "./AtivoComprado";

const input = prompt();

var c: Corretora = new Corretora();

carregarAtivos();
carregarContas()
carregarCarteiras();

let opcao: String = '';
do {
    console.log('\nEntrar no Sistema \nDigite uma opção:');
    console.log('1 - Entrar Como Corretora    2 - Entrar Como Investidor   3 - Cadastrar Conta 9 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            do {
                console.log('\nBem vindo ao Sistema de Gerenciamento de Ativos - Menu Corretora\nDigite uma opção:');
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
                console.log('\nBem vindo ao Sistema de Gerenciamento de Ativos - Menu Investidor\nDigite uma opção:');
                console.log('1 - Comprar Ativo    2 - Vender Ativo    3 - Consultar Ativos  4 - Ver Carteira  0 - Sair\n');
                opcao = input("Opção:");
                switch (opcao) {
                    case "1":
                        comprarAtivos();
                        break;
                    case "2":
                        venderAtivos();
                        break;
                    case "3":
                        consultarAtivos();
                        break;
                    case "4":
                        verCarteira();
                        break;
                }
            } while (opcao != "0");
            break
        case "3":
            cadastrarConta();
    }
} while (opcao != "9");
atualizarBancoDeDados();
input('Operação finalizada. Pressione <enter>');

//////////////////// FUNÇÕES DE ATIVOS CORRETORA ////////////////////
function cadastrarAtivo() {
    console.log("\nCadastrar Ativo\n");
    let tipo: string = input('Deseja Cadastrar Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
    if (tipo == 'A') {
        cadastrarAcao();
    } else if (tipo == 'T') {
        cadastrarTesouro();
    } else {
        console.log("\nOpção Incorreta");
        cadastrarAtivo()
    }
}

function consultarAtivos() {
    console.log("\nConsultar Ativos\n");
    console.log(c.listarAtivos());
}

function excluirAtivo() {
    console.log("\nExcluir Ativo\n");
    var tipo: string = input('Deseja Excluir Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
    if (tipo == 'A') {
        excluirAcao();
    } else if (tipo == 'T') {
        excluirTesouro();
    } else {
        console.log("\nOpção Invalida\n");
        excluirAtivo()
    }
}

function editarAtivo() {
    console.log("\nEditar Ativo\n");
    var tipo: string = input('Deseja Editar Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
    if (tipo == 'A') {
        editarAcao();
    } else if (tipo == 'T') {
        editarTesouro();
    } else {
        console.log("\nOpção Invalida\n");
        editarAtivo()
    }
}

//////////////////// FUNÇÕES DE AÇÕES CORRETORA ////////////////////
function cadastrarAcao() {
    console.log("\nCadastrar Ação\n");
    let acao!: Acao;
    let nome: string = input('Digite o Nome da Empresa: ').toLocaleUpperCase();
    let ticket: string = input('Digite o Ticket: ').toLocaleUpperCase();
    let valor: string = input('Digite o Valor: ');
    acao = new Acao('0', nome, parseFloat(valor), ticket);
    c.cadastrarAcao(acao);
}

function excluirAcao() {
    console.log("\nExcluir Ação\n");
    let ticket: string = input('Digite o Ticket da ação:').toLocaleUpperCase();
    c.excluirAcao(ticket);
}

function editarAcao() {
    console.log("\nEditar Ação\n");
    let ticket_editar: string = input('Ticket da Ação: ').toLocaleUpperCase();
    c.consultarAcaoTicket(ticket_editar);

    let edicao: string = input('\n Escolha uma opção \n1 - Editar Nome | 2 - Editar Ticket | 3 - Editar Valor \n');
    switch (edicao) {
        case "1":
            let nome: string = input('\nNovo Nome: ').toLocaleUpperCase();
            c.editarNomeAcao(ticket_editar, nome);
            break;
        case "2":
            let ticket: string = input('\nNovo Ticket: ').toLocaleUpperCase();
            c.editarTicketAcao(ticket_editar, ticket);
            break;
        case "3":
            let valor: string = input('\nNovo Valor: ');
            c.editarPrecoAcao(ticket_editar, parseFloat(valor));
            break;
        default:
            console.log("\nOpção Invalida\n");
            editarAcao()
    }
}

//////////////////// FUNÇÕES DE TESOURO CORRETORA ////////////////////
function cadastrarTesouro() {
    console.log("\nCadastrar Tesouro Direto\n");
    var tesouro!: TesouroDireto;
    var nome: string = input('Digite o Nome do Tesuro: ').toLocaleUpperCase();
    var vencimento: string = input('Digite a Data de vencimento DD/MM/AAAA: ');
    var valor_unitario: string = input('Digite o Valor Unitario: ');
    var taxa_retorno: string = input('Digite a Taxa de Retorno: ');
    tesouro = new TesouroDireto('0', nome, parseFloat(valor_unitario), vencimento, taxa_retorno);
    c.cadastrarTesouro(tesouro);
}

function excluirTesouro() {
    console.log("\nExcluir Tesouro\n");
    let nome_tesouro: string = input('Digite o Nome do Tesouro:').toLocaleUpperCase();
    c.excluirTesouro(nome_tesouro);
}

function editarTesouro() {
    console.log("\nEditar Tesouro\n");
    let tesouro_editar: string = input('Nome do Tesouro: ').toLocaleUpperCase();
    c.consultarTesouroNome(tesouro_editar);

    let edicao: string = input('\n Escolha uma opção \n1 - Editar Nome | 2 - Editar Valor | 3 - Editar Vencimento | 4 - Editar Rentabilidade \n');
    switch (edicao) {
        case "1":
            let nome: string = input('\nNovo Nome: ').toLocaleUpperCase();
            c.editarNomeTesouro(tesouro_editar, nome);
            break;
        case "2":
            let valor: string = input('\nNovo Valor: ');
            c.editarValorTesouro(tesouro_editar, parseFloat(valor));
            break;
        case "3":
            let vencimento: string = input('\nNovo Vencimento: ');
            c.editarVencimentoTesouro(tesouro_editar, vencimento);
            break;
        case "4":
            let rentabilidade_anual: string = input('\nNova Rentabilidade Anual: ');
            c.editarRentabilidadeTesouro(tesouro_editar, rentabilidade_anual);
            break;
        default:
            console.log("\nOpção Invalida\n");
            editarTesouro()
    }
}


//////////////////// FUNÇÕES DE ATIVOS INVESTIDOR ////////////////////
function comprarAtivos() {
    console.log("\n Comprar Ativo\n");
    var tipo: string = input('Deseja Comprar Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
    if (tipo == 'A') {
        comprarAcao();
    } else if (tipo == 'T') {
        comprarTesouro();
    } else {
        console.log("\nOpção Invalida\n");
        comprarAtivos()
    }
}

function venderAtivos() {
    console.log("\n Vender Ativo\n");
    var tipo: string = input('Deseja Comprar Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
    if (tipo == 'A') {
        venderAcao();
    } else if (tipo == 'T') {
        venderTesouro();
    } else {
        console.log("\nOpção Invalida\n");
        venderAtivos()
    }
}

function verCarteira() {
    console.log("\nVer Carteira\n");
    let nome_conta: string = input('Nome do Usuario: ').toLocaleUpperCase();
    c.verCarteira(nome_conta);
}

//////////////////// FUNÇÕES DE AÇÃO INVESTIDOR ////////////////////
function comprarAcao(): void {
    console.log("\nComprar Ação\n");
    let nome_ativo: string = input('Digite o Ticket da Ação: ').toLocaleUpperCase();
    let quantidade_acoes: string = input('Digite a Quantidade de Ações: ');
    let nome_conta: string = input('Nome do Usuario: ').toLocaleUpperCase();
    let ativo_comprado = new AtivoComprado(nome_conta, nome_ativo, parseInt(quantidade_acoes));
    c.comprarAcao(nome_conta, ativo_comprado);
}

function venderAcao(): void {
    console.log("\nVender Ação\n");
    let nome_ativo: string = input('Digite o Ticket da Ação: ').toLocaleUpperCase();
    let quantidade_acoes: string = input('Digite a Quantidade de Ações: ');
    let nome_conta: string = input('Nome do Usuario: ').toLocaleUpperCase();
    let acao_vendida = new AtivoComprado(nome_conta, nome_ativo, parseInt(quantidade_acoes));
    c.venderAcao(nome_conta, acao_vendida);
}

//////////////////// FUNÇÕES DE TESOURO INVESTIDOR ////////////////////
function comprarTesouro(): void {
    console.log("\nComprar Tesouro\n");
    let nome_ativo: string = input('Digite o Nome do Tesouro: ').toLocaleUpperCase();
    let quantidade: string = input('Digite a Quantidade: ');
    let nome_conta: string = input('Nome do Usuario: ').toLocaleUpperCase();
    let tesouro_comprado = new AtivoComprado(nome_conta, nome_ativo, parseInt(quantidade));
    c.comprarTesouro(nome_conta, tesouro_comprado);
}

function venderTesouro(): void {
    console.log("\nVender Tesouro\n");
    let nome_ativo: string = input('Digite o Nome do Tesouro: ').toLocaleUpperCase();
    let quantidade: string = input('Digite a Quantidade: ');
    let nome_conta: string = input('Nome do Usuario: ').toLocaleUpperCase();
    let tesouro_comprado = new AtivoComprado(nome_conta, nome_ativo, parseInt(quantidade));
    c.venderTesouro(nome_conta, tesouro_comprado);
}

//////////////////// FUNÇÕES SISTEMA ////////////////////

function atualizarBancoDeDados() {
    c.atualizarBancoDeDados();
}

function cadastrarConta(){
    let nome: string = input('Nome: ').toLocaleUpperCase();
    let saldo: string = input('Saldo Inicial: ').toLocaleUpperCase();
    let conta = new Conta(nome, parseFloat(saldo));
    c.cadastrarConta(conta);
}

function carregarAtivos() {
    let LineReaderSync = require("line-reader-sync");
    let lrs = new LineReaderSync("./ativos.txt");
    console.log("Iniciando leitura de arquivo");
    while (true) {
        let linha: string = lrs.readline();
        if (linha != null) {
            let array: string[] = linha.split(";");
            let tipo: string = array[0];
            let nome: string = array[1];

            let acao!: Acao;
            let tesouro!: TesouroDireto;

            if (tipo == 'A') {
                let ticket: string = array[2];
                let valor: number = parseFloat(array[3]);
                acao = new Acao("0", nome, valor, ticket);
                c.cadastrarAcao(acao);
                console.log('Ação lida: ' + acao.nome_ativo);

            } else if (tipo == 'T') {
                let valor: number = parseFloat(array[2]);
                let vencimento: string = array[3];
                let rentabilidade_anual: string = array[4];
                tesouro = new TesouroDireto("0", nome, valor, vencimento, rentabilidade_anual);
                c.cadastrarTesouro(tesouro);
                console.log('Tesouro lido: ' + tesouro.nome_ativo);
            }
        } else {
            break
        }
    }
}

function carregarContas() {
    let LineReaderSync = require("line-reader-sync");
    let ativo_comprado!: AtivoComprado;
    let contas = new LineReaderSync("./contas.txt");
    while (true) {
        let conta_bd: string = contas.readline();
        if (conta_bd != null) {
            let array: string[] = conta_bd.split(";");
            let nome_conta: string = array[0].toUpperCase();
            let saldo: number = parseFloat(array[1]);
            ativo_comprado = new AtivoComprado(nome_conta, 'AAAA', 0);
            let conta: Conta = new Conta(nome_conta, saldo, ativo_comprado);
            c.cadastrarConta(conta);
            console.log('Conta Lida: ' + conta.nome);
        } else {
            break;
        }
    }
}

function carregarCarteiras() {
    let LineReaderSync = require("line-reader-sync");
    let carteiras = new LineReaderSync("./carteiras.txt");
    while (true) {
        let carteira: string = carteiras.readline();
        if (carteira != null) {
            let array: string[] = carteira.split(";");
            let nome_conta: string = array[0].toUpperCase();
            let ticket: string = array[1];
            let quantidade: number = parseFloat(array[2]);

            let ativo_comprado = new AtivoComprado(nome_conta, ticket, quantidade);
            c.carregarAtivos(nome_conta, ativo_comprado);
            console.log('Carteira Lida: ' + nome_conta);
        } else {
            console.log("Dados Carregados!!")
            break
        }
    }
}