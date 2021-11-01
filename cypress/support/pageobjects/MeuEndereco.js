import EnderecoElements from "../elements/EnderecoElements";
import ElementsPaginaConfirmacao from "../elements/ElementsPaginaConfirmacao";
import waitLoader from "../util/waitLoader";
const enderecoElements = new EnderecoElements
const elementsPaginaConfirmacao = new ElementsPaginaConfirmacao
const endereco = require('../../Dados/dados.json')

class MeuEndereco {
    paginaMeuEndereco() {
        cy.visit("https://www.panvel.com/panvel/adicionarEndereco.do")
        waitLoader()
    }

    atualizarEndereco(meuEndereco) {

        var dadosEndereco = endereco.filter( x=> x.scenario==meuEndereco)
        var dados = dadosEndereco[0]
        cy.get(enderecoElements.barraDeCPF()).clear().type(dados.dados.cep)
        cy.get(enderecoElements.barraDeComplemento()).clear().type(dados.dados.complemeneto)
        cy.get(enderecoElements.barraDeIdentificacao()).clear().type(dados.dados.identificacao)
        cy.get(enderecoElements.barraDeNumero()).clear().type(dados.dados.numero)
        cy.get(enderecoElements.barraDeReferencia()).clear().type(dados.dados.referencia)
        cy.get(enderecoElements.botaoAdicionarEndereco()).click()
    }

    respostaDeAtualizacao() {
        cy.get(elementsPaginaConfirmacao.respostaAtualizarDados()).should('have.text', 'YESSS! Suas informações foram atualizadas com sucesso.')
    }


}

export default MeuEndereco