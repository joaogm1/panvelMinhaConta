/// <reference types="Cypress" />
import ElementsMinhaConta from "../elements/ElementsMinhaConta.js";


const elementsMinhaConta = new ElementsMinhaConta

class MinhaConta {
   

    

    adicionarEnderecoMinhaConta(){
        cy.get(elementsMinhaConta.aidicionarEndereco()).click()
    }
    
}

export default MinhaConta
