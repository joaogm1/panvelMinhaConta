import ElementsMeusDados from "../elements/ElementsMeusDados";
import ElementsPaginaConfirmacao from "../elements/ElementsPaginaConfirmacao";
import waitLoader from "../util/waitLoader";
const meusDados = require('../../Dados/dados.json')

const elementsMeusDados = new ElementsMeusDados
const elementsPaginaConfirmacao = new ElementsPaginaConfirmacao

class MeusDados {


    paginaMeusDados() {
        cy.visit("https://www.panvel.com/panvel/editarMeusDados.do")
        waitLoader()
    }
    atualzarDados(dados) {
        var dadosPagina = meusDados.filter( x=> x.scenario==dados)
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

}

export default MeusDados