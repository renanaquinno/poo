"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const corretora_1 = require("./corretora");
const Acao_1 = require("./Acao");
const TesouroDireto_1 = require("./TesouroDireto");
const Conta_1 = require("./Conta");
const AtivoComprado_1 = require("./AtivoComprado");
const input = (0, prompt_sync_1.default)();
var c = new corretora_1.Corretora();
let usuario;
carregarAtivos();
carregarContas();
let opcao = '';
do {
    console.log('\nEntrar no Sistema \nDigite uma opção:');
    console.log('1 - Gerenciar Ativos  2 - Entrar como Investidor  3 - Cadastrar Conta  9 - Sair\n');
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
            login();
            break;
        case "3":
            cadastrarConta();
            break;
    }
} while (opcao != "9");
atualizarBancoDeDados();
input('Operação finalizada. Pressione <enter>');
//////////////////// FUNÇÕES DE ATIVOS CORRETORA ////////////////////
function cadastrarAtivo() {
    console.log("\nCadastrar Ativo\n");
    let tipo = input('Deseja Cadastrar Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
    if (tipo == 'A') {
        cadastrarAcao();
    }
    else if (tipo == 'T') {
        cadastrarTesouro();
    }
    else {
        console.log("\nOpção Incorreta");
        cadastrarAtivo();
    }
}
function consultarAtivos() {
    console.log("\nConsultar Ativos\n");
    console.log(c.listarAtivos());
}
function excluirAtivo() {
    console.log("\nExcluir Ativo\n");
    var tipo = input('Deseja Excluir Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
    if (tipo == 'A') {
        excluirAcao();
    }
    else if (tipo == 'T') {
        excluirTesouro();
    }
    else {
        console.log("\nOpção Invalida\n");
        excluirAtivo();
    }
}
function editarAtivo() {
    console.log("\nEditar Ativo\n");
    var tipo = input('Deseja Editar Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
    if (tipo == 'A') {
        editarAcao();
    }
    else if (tipo == 'T') {
        editarTesouro();
    }
    else {
        console.log("\nOpção Invalida\n");
        editarAtivo();
    }
}
//////////////////// FUNÇÕES DE AÇÕES CORRETORA ////////////////////
function cadastrarAcao() {
    console.log("\nCadastrar Ação\n");
    let acao;
    let nome = input('Digite o Nome da Empresa: ').toLocaleUpperCase();
    let ticket = input('Digite o Ticket: ').toLocaleUpperCase();
    let valor = input('Digite o Valor: ');
    acao = new Acao_1.Acao('0', nome, parseFloat(valor), ticket);
    c.cadastrarAcao(acao);
}
function excluirAcao() {
    console.log("\nExcluir Ação\n");
    let ticket = input('Digite o Ticket da ação:').toLocaleUpperCase();
    c.excluirAcao(ticket);
}
function editarAcao() {
    console.log("\nEditar Ação\n");
    let ticket_editar = input('Ticket da Ação: ').toLocaleUpperCase();
    c.consultarAcaoTicket(ticket_editar);
    let edicao = input('\n Escolha uma opção \n1 - Editar Nome | 2 - Editar Ticket | 3 - Editar Valor \n');
    switch (edicao) {
        case "1":
            let nome = input('\nNovo Nome: ').toLocaleUpperCase();
            c.editarNomeAcao(ticket_editar, nome);
            break;
        case "2":
            let ticket = input('\nNovo Ticket: ').toLocaleUpperCase();
            c.editarTicketAcao(ticket_editar, ticket);
            break;
        case "3":
            let valor = input('\nNovo Valor: ');
            c.editarPrecoAcao(ticket_editar, parseFloat(valor));
            break;
        default:
            console.log("\nOpção Invalida\n");
            editarAcao();
    }
}
//////////////////// FUNÇÕES DE TESOURO CORRETORA ////////////////////
function cadastrarTesouro() {
    console.log("\nCadastrar Tesouro Direto\n");
    var tesouro;
    var nome = input('Digite o Nome do Tesuro: ').toLocaleUpperCase();
    var vencimento = input('Digite a Data de vencimento DD/MM/AAAA: ');
    var valor_unitario = input('Digite o Valor Unitario: ');
    var taxa_retorno = input('Digite a Taxa de Retorno: ');
    tesouro = new TesouroDireto_1.TesouroDireto('0', nome, parseFloat(valor_unitario), vencimento, taxa_retorno);
    c.cadastrarTesouro(tesouro);
}
function excluirTesouro() {
    console.log("\nExcluir Tesouro\n");
    let nome_tesouro = input('Digite o Nome do Tesouro:').toLocaleUpperCase();
    c.excluirTesouro(nome_tesouro);
}
function editarTesouro() {
    console.log("\nEditar Tesouro\n");
    let tesouro_editar = input('Nome do Tesouro: ').toLocaleUpperCase();
    c.consultarTesouroNome(tesouro_editar);
    let edicao = input('\n Escolha uma opção \n1 - Editar Nome | 2 - Editar Valor | 3 - Editar Vencimento | 4 - Editar Rentabilidade \n');
    switch (edicao) {
        case "1":
            let nome = input('\nNovo Nome: ').toLocaleUpperCase();
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
        default:
            console.log("\nOpção Invalida\n");
            editarTesouro();
    }
}
//////////////////// FUNÇÕES DE ATIVOS INVESTIDOR ////////////////////
function login() {
    console.log("FAZER LOGIN");
    var user = input('USUARIO: ').toLocaleUpperCase();
    var senha = input('SENHA: ').toLocaleUpperCase();
    usuario = c.fazerLogin(user, senha);
    if (usuario != null) {
        carregarCarteirasuUsuario(usuario.nome);
        do {
            console.log('\nBem vindo ao Sistema da Corretora - Menu Investidor\nDigite uma opção:');
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
                    verCarteira(usuario.nome);
                    break;
            }
        } while (opcao != "0");
    }
}
function comprarAtivos() {
    console.log("\n Comprar Ativo\n");
    var tipo = input('Deseja Comprar Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
    if (tipo == 'A') {
        comprarAcao(usuario.nome);
    }
    else if (tipo == 'T') {
        comprarTesouro(usuario.nome);
    }
    else {
        console.log("\nOpção Invalida\n");
        comprarAtivos();
    }
}
function venderAtivos() {
    console.log("\n Vender Ativo\n");
    var tipo = input('Deseja Comprar Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
    if (tipo == 'A') {
        venderAcao(usuario.nome);
    }
    else if (tipo == 'T') {
        venderTesouro(usuario.nome);
    }
    else {
        console.log("\nOpção Invalida\n");
        venderAtivos();
    }
}
function verCarteira(usuario_nome) {
    console.log("\nVer Carteira\n");
    c.verCarteira(usuario_nome);
}
//////////////////// FUNÇÕES DE AÇÃO INVESTIDOR ////////////////////
function comprarAcao(usuario_nome) {
    console.log("\nComprar Ação\n");
    let nome_ativo = input('Digite o Ticket da Ação: ').toLocaleUpperCase();
    let quantidade_acoes = input('Digite a Quantidade de Ações: ');
    let ativo_comprado = new AtivoComprado_1.AtivoComprado(usuario_nome, nome_ativo, parseInt(quantidade_acoes), 'A');
    let info = c.consultarAcaoTicket(nome_ativo);
    let valor_total = (info.valor_ativo * parseFloat(quantidade_acoes));
    usuario.comprarAcao(ativo_comprado, valor_total);
}
function venderAcao(usuario_nome) {
    console.log("\nVender Ação\n");
    let nome_ativo = input('Digite o Ticket da Ação: ').toLocaleUpperCase();
    let quantidade_acoes = input('Digite a Quantidade de Ações: ');
    let acao_vendida = new AtivoComprado_1.AtivoComprado(usuario_nome, nome_ativo, parseInt(quantidade_acoes), 'A');
    let info = c.consultarAcaoTicket(nome_ativo);
    let valor_total = (info.valor_ativo * parseFloat(quantidade_acoes));
    usuario.venderAcao(acao_vendida, valor_total);
}
//////////////////// FUNÇÕES DE TESOURO INVESTIDOR ////////////////////
function comprarTesouro(nome_conta) {
    console.log("\nComprar Tesouro\n");
    let nome_ativo = input('Digite o Nome do Tesouro: ').toLocaleUpperCase();
    let quantidade = input('Digite a Quantidade: ');
    let tesouro_comprado = new AtivoComprado_1.AtivoComprado(nome_conta, nome_ativo, parseInt(quantidade), 'T');
    let info = c.consultarTesouroNome(nome_ativo);
    let valor_total = (info.valor_ativo * parseFloat(quantidade));
    usuario.comprarTesouro(tesouro_comprado, valor_total);
}
function venderTesouro(nome_conta) {
    console.log("\nVender Tesouro\n");
    let nome_ativo = input('Digite o Nome do Tesouro: ').toLocaleUpperCase();
    let quantidade = input('Digite a Quantidade: ');
    let tesouro_vendido = new AtivoComprado_1.AtivoComprado(nome_conta, nome_ativo, parseInt(quantidade), 'T');
    let info = c.consultarTesouroNome(nome_ativo);
    let valor_total = (info.valor_ativo * parseFloat(quantidade));
    usuario.venderAcao(tesouro_vendido, valor_total);
}
//////////////////// FUNÇÕES SISTEMA ////////////////////
function atualizarBancoDeDados() {
    c.atualizarBancoDeDados();
    usuario.atualizarBanco();
}
function cadastrarConta() {
    let nome = input('Nome: ').toLocaleUpperCase();
    let senha = input('Senha: ').toLocaleUpperCase();
    let saldo = input('Saldo Inicial: ').toLocaleUpperCase();
    let conta = new Conta_1.Investidor(nome, senha, parseFloat(saldo));
    c.cadastrarConta(conta);
}
function carregarAtivos() {
    let LineReaderSync = require("line-reader-sync");
    let lrs = new LineReaderSync("./ativos.txt");
    console.log("Iniciando Banco de Dados\n");
    while (true) {
        let linha = lrs.readline();
        if (linha != null) {
            let array = linha.split(";");
            let tipo = array[0];
            let nome = array[1];
            let acao;
            let tesouro;
            if (tipo == 'A') {
                let ticket = array[2];
                let valor = parseFloat(array[3]);
                acao = new Acao_1.Acao("0", nome, valor, ticket);
                c.cadastrarAcao(acao);
                console.log('Ação lida: ' + acao.nome_ativo);
            }
            else if (tipo == 'T') {
                let valor = parseFloat(array[2]);
                let vencimento = array[3];
                let rentabilidade_anual = array[4];
                tesouro = new TesouroDireto_1.TesouroDireto("0", nome, valor, vencimento, rentabilidade_anual);
                c.cadastrarTesouro(tesouro);
                console.log('Tesouro lido: ' + tesouro.nome_ativo);
            }
        }
        else {
            break;
        }
    }
    console.log("---- ATIVOS CARREGADOS ----\n");
}
function carregarContas() {
    let LineReaderSync = require("line-reader-sync");
    let ativo_comprado;
    let contas = new LineReaderSync("./contas.txt");
    while (true) {
        let conta_bd = contas.readline();
        if (conta_bd != null) {
            let array = conta_bd.split(";");
            let nome_conta = array[0].toUpperCase();
            let saldo = parseFloat(array[1]);
            let senha = array[2];
            ativo_comprado = new AtivoComprado_1.AtivoComprado(nome_conta, 'AAAA', 0, '');
            let conta = new Conta_1.Investidor(nome_conta, senha, saldo);
            c.cadastrarConta(conta);
            console.log('Conta Lida: ' + conta.nome);
        }
        else {
            break;
        }
    }
    console.log("---- CONTAS CARREGADAS ----\n");
}
function carregarCarteirasuUsuario(nome_conta) {
    let LineReaderSync = require("line-reader-sync");
    let fs = require('fs');
    let carteiras;
    try {
        carteiras = new LineReaderSync("./carteira_" + nome_conta + ".txt");
    }
    catch (error) {
        let conteudo = '';
        fs.writeFile("./carteira_" + nome_conta + ".txt", conteudo, function (err) {
            if (err)
                throw err;
        });
        carteiras = new LineReaderSync("./carteira_" + nome_conta + ".txt");
    }
    while (true) {
        let carteira = carteiras.readline();
        if (carteira != null) {
            let array = carteira.split(";");
            let nome_conta = array[0].toUpperCase();
            let ticket = array[1];
            let quantidade = parseFloat(array[2]);
            let tipo = array[3].toUpperCase();
            let ativo_comprado = new AtivoComprado_1.AtivoComprado(nome_conta, ticket, quantidade, tipo);
            usuario.carregarAcao(ativo_comprado);
            console.log('CARTEIRA CARREGADA: ' + nome_conta);
        }
        else {
            break;
        }
    }
}
