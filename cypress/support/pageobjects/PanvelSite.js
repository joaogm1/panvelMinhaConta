/// <reference types="Cypress" />
import PanvelElements from "../elements/PanvelElements";


const panvelElements = new PanvelElements

class PanvelSite {
    acessarPanvel() {

        cy.visit("https://www.panvel.com/");
    }

    acessarLogin(){
        cy.get(panvelElements.iconeEntrar()).click()
    }

    preencherLogin(){
        cy.get(panvelElements.barraCpf()).type('86369113034')
        cy.get(panvelElements.barraSenha()).type('Teste123')
    }
    logarBotao(){
        cy.get(panvelElements.botaoEntrarLogin()).click()
    }
}

export default PanvelSite
