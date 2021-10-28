import ElementsMeusDados from "../elements/ElementsMeusDados";
import ElementsPaginaConfirmacao from "../elements/ElementsPaginaConfirmacao";
import waitLoader from "../util/waitLoader";

const elementsMeusDados = new ElementsMeusDados
const elementsPaginaConfirmacao = new ElementsPaginaConfirmacao

class MeusDados {


    paginaMeusDados() {
        cy.visit("https://www.panvel.com/panvel/editarMeusDados.do")
        waitLoader()
    }
    atualzarDados() {

        cy.get(elementsMeusDados.barraData()).clear().type('23111994')
        cy.get(elementsMeusDados.barraMeuTelefone()).clear().type('985743758')
        cy.get(elementsMeusDados.barraSexo()).select('M')
        cy.get(elementsMeusDados.barraCivil()).select('3')
        cy.get(elementsMeusDados.botaoAtualizarDados()).click()
    }

    respostaDeAtualizacao() {
        cy.get(elementsPaginaConfirmacao.respostaAtualizarDados()).should('have.text', 'YESSS! Suas informações foram atualizadas com sucesso.')
    }

}

export default MeusDados