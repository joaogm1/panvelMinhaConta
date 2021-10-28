/// <reference types="Cypress" />
import ElementsMinhaConta from "../elements/ElementsMinhaConta.js";


const elementsMinhaConta = new ElementsMinhaConta

class MinhaConta {
   

    atualizarMeusDados() {
        cy.get(elementsMinhaConta.botaoAtualizarMeusDados()).click()
    }
    atualizarTelefone() {
        cy.get(elementsMinhaConta.atualizarMeuTelefone()).clear()
        cy.get(elementsMinhaConta.atualizarMeuTelefone()).type('985743758')
    }

    atualizarDadosGeralMinhaConta() {
        cy.get(elementsMinhaConta.atualizarDadosGeral()).click()
    }

    respostaDeAtualizacao(){
       cy.get(elementsMinhaConta.respostaAtualizarDados()).should('have.text','YESSS! Suas informações foram atualizadas com sucesso.')
    }

    adicionarEnderecoMinhaConta(){
        cy.get(elementsMinhaConta.aidicionarEndereco()).click()
    }
    
}

export default MinhaConta
