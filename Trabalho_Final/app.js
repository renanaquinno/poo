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
    console.log('1 - Gerenciar Ativos  2 - Entrar como Investidor  4 - Cadastrar Investidor - 3 Ver Investidores 9 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            do {
                console.log('\nBem vindo ao Sistema de Gerenciamento de Ativos - Menu Gerenciar\nDigite uma opção:');
                console.log('1 - Cadastrar Ativo    2 - Editar Ativo   3 - Excluir Ativo  4 - Consultar Ativos  0 - Sair\n');
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
                        listarAtivos();
                        break;
                }
            } while (opcao != "0");
            break;
        case "2":
            login();
            break;
        case "3":
            listarContas();
            break;
        case "4":
            cadastrarConta();
            break;
        default:
            console.log('Opção Invalida, Tente Novamente!');
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
    listarAtivos();
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
    let id = input('Digite o ID: ').toLocaleUpperCase();
    let nome = input('Digite o Nome da Empresa: ').toLocaleUpperCase();
    let ticket = input('Digite o Ticket: ').toLocaleUpperCase();
    let valor = input('Digite o Valor: ');
    acao = new Acao_1.Acao(id, nome, parseFloat(valor), ticket);
    c.cadastrarAcao(acao);
}
function excluirAcao() {
    console.log("\nExcluir Ação\n");
    let id_ativo = input('Digite o Identificador da ação:').toLocaleUpperCase();
    c.excluirAcao(id_ativo);
}
function editarAcao() {
    console.log("\nEditar Ação\n");
    let id_ativo = input('Digite Identificador da Ação: ').toLocaleUpperCase();
    c.consultarAcaoId(id_ativo);
    let edicao = input('\n Escolha uma opção \n1 - Editar Nome | 2 - Editar Ticket | 3 - Editar Valor \n');
    switch (edicao) {
        case "1":
            let nome = input('\nNovo Nome: ').toLocaleUpperCase();
            c.editarNomeAcao(id_ativo, nome);
            break;
        case "2":
            let ticket = input('\nNovo Ticket: ').toLocaleUpperCase();
            c.editarTicketAcao(id_ativo, ticket);
            break;
        case "3":
            let valor = input('\nNovo Valor: ');
            c.editarPrecoAcao(id_ativo, parseFloat(valor));
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
    var id = input('Digite o ID do Tesuro: ').toLocaleUpperCase();
    var nome = input('Digite o Nome do Tesuro: ').toLocaleUpperCase();
    var vencimento = input('Digite a Data de vencimento DD/MM/AAAA: ');
    var valor_unitario = input('Digite o Valor Unitario: ');
    var taxa_retorno = input('Digite a Taxa de Retorno: ');
    tesouro = new TesouroDireto_1.TesouroDireto(id, nome, parseFloat(valor_unitario), vencimento, taxa_retorno);
    c.cadastrarTesouro(tesouro);
}
function excluirTesouro() {
    console.log("\nExcluir Tesouro\n");
    let id_ativo = input('Digite o Identificador do Tesouro:').toLocaleUpperCase();
    c.excluirTesouro(id_ativo);
}
function editarTesouro() {
    console.log("\nEditar Tesouro\n");
    let tesouro_editar = input('Digite o Identificador Tesouro: ').toLocaleUpperCase();
    c.consultarTesouroId(tesouro_editar);
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
    console.log("---- FAZER LOGIN ----");
    var user = input('Usuario: ').toLocaleUpperCase();
    var senha = input('Senha: ').toLocaleUpperCase();
    usuario = c.fazerLogin(user, senha);
    if (usuario != null) {
        carregarCarteirasuUsuario(usuario.nome);
        do {
            console.log('\nBem vindo ao Sistema da Corretora - Menu Investidor\nDigite uma opção:');
            console.log('1 - Comprar Ativo\n2 - Vender Ativo\n3 - Consultar Ativos\n4 - Ver Carteira\n0 - Sair\n');
            opcao = input("Opção:");
            switch (opcao) {
                case "1":
                    operarAtivo(usuario.nome, 'COMPRAR');
                    break;
                case "2":
                    operarAtivo(usuario.nome, 'VENDER');
                    break;
                case "3":
                    listarAtivos();
                    break;
                case "4":
                    verCarteira(usuario.nome);
                    break;
                default:
                    console.log('** Opção Invalida **');
            }
        } while (opcao != "0");
    }
}
//////////////////// FUNÇÕES DE AÇÃO INVESTIDOR ////////////////////
function verCarteira(usuario_nome) {
    console.log("\n ------ Ver Carteira ------");
    console.log(usuario.verCarteira(usuario_nome));
}
function operarAtivo(usuario_nome, tipo_operacao) {
    listarAtivos();
    console.log("\nOperar Ativo\n");
    var tipo_ativo = input('Deseja Operar Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
    let id_ativo = input('Digite o Identificador do Ativo: ').toLocaleUpperCase();
    let info;
    if (tipo_ativo == 'A') {
        info = c.consultarAcaoId(id_ativo);
    }
    else if (tipo_ativo == 'T') {
        info = c.consultarAcaoId(id_ativo);
    }
    else {
        console.log("\nOpção Invalida - Digite A ou T\n");
        operarAtivo(usuario_nome, tipo_operacao);
    }
    let quantidade_acoes = input('Digite a Quantidade: ');
    let ativo_comprado = new AtivoComprado_1.AtivoComprado(id_ativo, usuario_nome, info.nome_ativo, parseInt(quantidade_acoes), tipo_ativo);
    let valor_total = (info.valor_ativo * parseFloat(quantidade_acoes));
    usuario.operarAtivo(ativo_comprado, valor_total, tipo_operacao);
    console.log('Operação Realizada com Sucesso!\nSaldo Atual: R$ ' + usuario.saldo);
}
function listarContas() {
    console.log('---- Ver Investidores ----');
    console.log(c.listarContas());
}
function listarAtivos() {
    console.log('---- Ver Ativos ----');
    console.log(c.listarAtivos());
}
//////////////////// FUNÇÕES SISTEMA ////////////////////
function atualizarBancoDeDados() {
    c.atualizarBancoDeDados();
    if (usuario != null) {
        usuario.atualizarBanco();
    }
}
function cadastrarConta() {
    let id = input('ID: ').toLocaleUpperCase();
    let nome = input('Nome: ').toLocaleUpperCase();
    let senha = input('Senha: ').toLocaleUpperCase();
    let saldo = input('Saldo Inicial: ').toLocaleUpperCase();
    let conta = new Conta_1.Investidor(id, nome, senha, parseFloat(saldo));
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
            let id = array[0];
            let tipo = array[1];
            let nome = array[2];
            let acao;
            let tesouro;
            if (tipo == 'A') {
                let ticket = array[3];
                let valor = parseFloat(array[4]);
                acao = new Acao_1.Acao(id, nome, valor, ticket);
                c.cadastrarAcao(acao);
                console.log('Ação lida: ' + acao.nome_ativo);
            }
            else if (tipo == 'T') {
                let valor = parseFloat(array[3]);
                let vencimento = array[4];
                let rentabilidade_anual = array[5];
                tesouro = new TesouroDireto_1.TesouroDireto(id, nome, valor, vencimento, rentabilidade_anual);
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
    let contas = new LineReaderSync("./contas.txt");
    while (true) {
        let conta_bd = contas.readline();
        if (conta_bd != null) {
            let array = conta_bd.split(";");
            let id_conta = array[0].toUpperCase();
            let nome_conta = array[1].toUpperCase();
            let saldo = parseFloat(array[2]);
            let senha = array[3].toUpperCase();
            let conta = new Conta_1.Investidor(id_conta, nome_conta, senha, saldo);
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
            let id_ativo = array[0].toUpperCase();
            let nome_conta = array[1].toUpperCase();
            let ticket = array[2];
            let quantidade = parseFloat(array[3]);
            let tipo = array[4].toUpperCase();
            let ativo_comprado = new AtivoComprado_1.AtivoComprado(id_ativo, nome_conta, ticket, quantidade, tipo);
            usuario.carregarAtivo(ativo_comprado);
        }
        else {
            console.log('CARTEIRA CARREGADA: ' + nome_conta);
            break;
        }
    }
}
