/// <reference types="Cypress" />
import LoginElements from "../elements/LoginElements";

const loginElements = new LoginElements

class Login{

    acessarPanvel() {

        cy.visit("https://www.panvel.com/");
    }

    acessarLogin() {
        cy.wait(3000)
        cy.get(loginElements.iconeEntrar()).click()
    }

    preencherLogin() {
        cy.wait(3000)

        cy.get(loginElements.barraCpf()).type('86369113034')
        cy.get(loginElements.barraSenha()).type('Teste123')
    }
    logarBotao() {
        cy.wait(3000)
        cy.get(loginElements.botaoEntrarLogin()).click()
    }
    logarMinhaConta() {
        cy.wait(3000)
        // cy.get(panvelElements.botaoMinhaConta()).invoke('show')
        cy.visit('/panvel/meusDados.do')
    }

}

export default Login
