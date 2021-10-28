/// <reference types="Cypress" />
import LoginElements from "../elements/LoginElements";
import waitLoader from "../util/waitLoader";

const loginElements = new LoginElements

class Login {

    acessarPanvel() {

        cy.visit("https://www.panvel.com/panvel/login.do");
        waitLoader()
    }

    acessarLogin() {
        cy.get(loginElements.iconeEntrar()).click()
    }

    preencherLogin() {

        cy.get(loginElements.barraCpf()).type('86369113034')
        cy.get(loginElements.barraSenha()).type('Teste123')
    }
    logarBotao() {
        cy.get(loginElements.botaoEntrarLogin()).click()
    }
    logarMinhaConta() {
        // cy.get(panvelElements.botaoMinhaConta()).invoke('show')
        cy.visit('/panvel/meusDados.do')
    }

}

export default Login
