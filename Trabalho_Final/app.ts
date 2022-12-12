import prompt from "prompt-sync";
import { Corretora } from "./corretora";
import { Acao } from "./Acao";
import { TesouroDireto } from "./TesouroDireto";
import { Investidor } from "./Conta";
import { AtivoComprado } from "./AtivoComprado";

const input = prompt();

var c: Corretora = new Corretora();
let usuario!: Investidor;

carregarAtivos();
carregarContas()

let opcao: String = '';
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
            break
        case "3":
            listarContas();
            break
        case "4":
            cadastrarConta();
            break
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
function login() {
    console.log("---- FAZER LOGIN ----");
    var user: string = input('Usuario: ').toLocaleUpperCase();
    var senha: string = input('Senha: ').toLocaleUpperCase();
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
                    consultarAtivos();
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

    function verCarteira(usuario_nome: string) {
        console.log("\n ------ Ver Carteira ------");
        console.log(usuario.verCarteira(usuario_nome));
    }

    //////////////////// FUNÇÕES DE AÇÃO INVESTIDOR ////////////////////
    function operarAtivo(usuario_nome: string, tipo_operacao: string): void {
        listarAtivos();
        console.log("\nOperar Ativo\n");
        var tipo_ativo: string = input('Deseja Operar Ação (A) ou Tesouro Direto (T) - Digite A ou T: ').toLocaleUpperCase();
        let nome_ativo: string = input('Digite o Identificador do Ativo: ').toLocaleUpperCase();
        let quantidade_acoes: string = input('Digite a Quantidade: ');
        let ativo_comprado = new AtivoComprado(usuario_nome, nome_ativo, parseInt(quantidade_acoes), tipo_ativo);
        let info;

        if (tipo_ativo == 'A'){
            info = c.consultarAcaoTicket(nome_ativo);
        } else if (tipo_ativo == 'T') {
            info = c.consultarTesouroNome(nome_ativo);
        } else {
            console.log("\nOpção Invalida - Digite A ou T\n");
            operarAtivo(usuario_nome, tipo_operacao)
        }

        let valor_total = (info.valor_ativo * parseFloat(quantidade_acoes));
    
        usuario.operarAtivo(ativo_comprado, valor_total, tipo_operacao);
        console.log('Operação Realizada com Sucesso!\nSaldo Atual: R$ ' + usuario.saldo);
    }
    
    //////////////////// FUNÇÕES SISTEMA ////////////////////
    function listarContas(){
        console.log('---- Ver Investidores ----');
        console.log(c.listarContas())   
    }
    function listarAtivos(){
        console.log('---- Ver Ativos ----');
        console.log(c.listarAtivos())   
    }

    function atualizarBancoDeDados() {
        c.atualizarBancoDeDados();
        if (usuario != null){
            usuario.atualizarBanco();
        }
    }

    function cadastrarConta() {
        let nome: string = input('Nome: ').toLocaleUpperCase();
        let senha: string = input('Senha: ').toLocaleUpperCase();
        let saldo: string = input('Saldo Inicial: ').toLocaleUpperCase();
        let conta = new Investidor(nome, senha, parseFloat(saldo));
        c.cadastrarConta(conta);
    }

    function carregarAtivos() {
        let LineReaderSync = require("line-reader-sync");
        let lrs = new LineReaderSync("./ativos.txt");
        console.log("Iniciando Banco de Dados\n");
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
        console.log("---- ATIVOS CARREGADOS ----\n");
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
                let senha: string = array[2];
                ativo_comprado = new AtivoComprado(nome_conta, 'AAAA', 0, '');
                let conta: Investidor = new Investidor(nome_conta, senha, saldo);
                c.cadastrarConta(conta);
                console.log('Conta Lida: ' + conta.nome);
            } else {
                break;
            }
        }
        console.log("---- CONTAS CARREGADAS ----\n");

    }

    function carregarCarteirasuUsuario(nome_conta: string) {
        let LineReaderSync = require("line-reader-sync");
        let fs = require('fs');
        let carteiras;

        try {
            carteiras = new LineReaderSync("./carteira_" + nome_conta + ".txt");
        } catch (error) {
            let conteudo = '';
            fs.writeFile("./carteira_" + nome_conta + ".txt", conteudo, function (err: any) {
                if (err) throw err;
            }); 
            carteiras = new LineReaderSync("./carteira_" + nome_conta + ".txt");
        }
        
        while (true) {
            let carteira: string = carteiras.readline();
            if (carteira != null) {
                let array: string[] = carteira.split(";");
                let nome_conta: string = array[0].toUpperCase();
                let ticket: string = array[1];
                let quantidade: number = parseFloat(array[2]);
                let tipo: string = array[3].toUpperCase();

                let ativo_comprado = new AtivoComprado(nome_conta, ticket, quantidade, tipo);
                usuario.carregarAtivo(ativo_comprado);
            } else {
                console.log('CARTEIRA CARREGADA: ' + nome_conta);
                break
            }
        }
    }