import EnderecoElements from "../elements/EnderecoElements";
import ElementsPaginaConfirmacao from "../elements/ElementsPaginaConfirmacao";
import waitLoader from "../util/waitLoader";
import LoginElements from "../elements/LoginElements";
import ElementsMinhaConta from "../elements/ElementsMinhaConta";
import modalBlackFriday from "../util/modalBlackFriday";
import ElementsMeusDados from "../elements/ElementsMeusDados";
import modalTermos from "../util/modalTermos";



const elementsMinhaConta = new ElementsMinhaConta
const loginElements = new LoginElements
const enderecoElements = new EnderecoElements
const elementsPaginaConfirmacao = new ElementsPaginaConfirmacao
const elementsMeusDados = new ElementsMeusDados
const endereco = require('../../Dados/dados.json')
const meusDados = require('../../Dados/dados.json')

class MinhaConta {
    paginaMeuEndereco() {
        cy.visit("https://www.panvel.com/panvel/adicionarEndereco.do")
        waitLoader()
    }

    atualizarEndereco(dados) {

        var dadosEndereco = endereco.filter(x => x.scenario == dados)
        var dados = dadosEndereco[0]
        cy.get(enderecoElements.barraDeCPF()).clear().type(dados.dados.cep)
        cy.get(enderecoElements.barraDeComplemento()).clear().type(dados.dados.complemeneto)
        cy.get(enderecoElements.barraDeIdentificacao()).clear().type(dados.dados.identificacao)
        cy.get(enderecoElements.barraDeNumero()).clear().type(dados.dados.numero)
        cy.get(enderecoElements.barraDeReferencia()).clear().type(dados.dados.referencia)
        cy.get(enderecoElements.botaoAdicionarEndereco()).click()
        waitLoader()
    }

    respostaDeAtualizacao() {
        cy.get(elementsPaginaConfirmacao.respostaAtualizarDados()).should('have.text', 'YESSS! Suas informações foram atualizadas com sucesso.')
    }

    respostaDeErro() {
        cy.get(enderecoElements.barraDeCPF()).should('have.css', 'border', '1.5px solid rgb(219, 83, 83)')
    }

    // funcoes login 
    acessarPanvel() {

        cy.visit("https://www.panvel.com/panvel/login.do");
        waitLoader()
    }

    preencherLogin() {

        cy.get(loginElements.barraCpf()).type('86369113034')
        cy.get(loginElements.barraSenha()).type('Teste123')
        waitLoader()
    }
    logarBotao() {
        cy.get(loginElements.botaoEntrarLogin()).click()
        modalBlackFriday()
        modalTermos()
    }
    confirmarUrl() {

        cy.url().should('be.equal', 'https://www.panvel.com/')

    }
    //final login

    // funcoes para verificacao minha conta
    verificarDadosMinhaConta() {
        cy.visit('https://www.panvel.com/panvel/meusDados.do')
        cy.get(elementsMinhaConta.cardEndereco()).should('include.text', 'ESTR: 15, 865, eldorado, PARQUE GUAIBA, ELDORADO DO SUL, RS')
        cy.get(elementsMinhaConta.cardTelefone()).should('include.text', '985743758')
        cy.get(elementsMinhaConta.cardNome()).should('include.text', 'JOAO GUILHERME GROSS MARTINS')
        waitLoader()
    }
    // final das funçoes de verificação da minha conta

    // função para atualizar meus dados

    paginaMeusDados() {
        cy.visit("https://www.panvel.com/panvel/editarMeusDados.do")
        waitLoader()
    }
    atualzarDados(dados) {
        var dadosPagina = meusDados.filter(x => x.scenario == dados)
        var dadosInput = dadosPagina[0]
        cy.get(elementsMeusDados.barraData()).clear().type(dadosInput.dados.data)
        cy.get(elementsMeusDados.barraMeuTelefone()).clear().type(dadosInput.dados.telefone)
        cy.get(elementsMeusDados.barraSexo()).select(dadosInput.dados.sexo)
        cy.get(elementsMeusDados.barraCivil()).select(dadosInput.dados.civil)
        cy.get(elementsMeusDados.botaoAtualizarDados()).click()
    }

    respostaDeAtualizacao() {
        cy.get(elementsPaginaConfirmacao.respostaAtualizarDados()).should('have.text', 'YESSS! Suas informações foram atualizadas com sucesso.')
    }

    respostaDeErroDados() {
        cy.get(elementsMeusDados.mensagemErro()).should('have.text', 'Erro ao atualizar cadastro do cliente')
    }

    // final das funções de atualização de dados
}

export default MinhaConta