/// <reference types="Cypress" />
import ElementsMinhaConta from "../elements/ElementsMinhaConta.js";
import waitLoader from "../util/waitLoader.js";


const elementsMinhaConta = new ElementsMinhaConta

class MinhaConta {

    verificarMinhaConta() {
        cy.log("verificando")
    }

    verificarDadosMinhaConta() {
        cy.get(elementsMinhaConta.cardEndereco()).should('include.text', 'ESTR: 15, 865, eldorado, PARQUE GUAIBA, ELDORADO DO SUL, RS')
        cy.get(elementsMinhaConta.cardEndereco()).should('include.text', 'R: ATILIO SUPERTTI, 1430, Zona Sul, VILA NOVA, PORTO ALEGRE, RS')
        cy.get(elementsMinhaConta.cardTelefone()).should('include.text','985743758')
        cy.get(elementsMinhaConta.cardNome()).should('include.text','JOAO GUILHERME GROSS MARTINS')
        waitLoader()
    }
}

export default MinhaConta

