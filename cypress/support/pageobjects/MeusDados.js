import ElementsMeusDados from "../elements/ElementsMeusDados";
import waitLoader from "../util/waitLoader";

const elementsMeusDados = new ElementsMeusDados

class MeusDados{
    

    paginaMeusDados() {
        cy.visit("https://www.panvel.com/panvel/editarMeusDados.do")
        waitLoader()
    }
    atualizarTelefone() {
        cy.get(elementsMeusDados.atualizarMeuTelefone()).clear()
        cy.get(elementsMeusDados.atualizarMeuTelefone()).type('985743758')
    }

    atualizarDadosGeralMinhaConta() {
        cy.get(elementsMeusDados.atualizarDadosGeral()).click()
    }

    respostaDeAtualizacao(){
       cy.get(elementsMeusDados.respostaAtualizarDados()).should('have.text','YESSS! Suas informações foram atualizadas com sucesso.')
    }

}

export default MeusDados