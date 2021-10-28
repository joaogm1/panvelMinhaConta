import ElementsMeusDados from "../elements/ElementsMeusDados";
import ElementsPaginaConfirmacao from "../elements/ElementsPaginaConfirmacao";
import waitLoader from "../util/waitLoader";

const elementsMeusDados = new ElementsMeusDados
const elementsPaginaConfirmacao = new ElementsPaginaConfirmacao

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
       cy.get(elementsPaginaConfirmacao.respostaAtualizarDados()).should('have.text','YESSS! Suas informações foram atualizadas com sucesso.')
    }

}

export default MeusDados