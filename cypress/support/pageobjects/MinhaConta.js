/// <reference types="Cypress" />
import ElementsMinhaConta from "../elements/ElementsMinhaConta.js";
import waitLoader from "../util/waitLoader.js";


const elementsMinhaConta = new ElementsMinhaConta

class MinhaConta {
   
    verificarMinhaConta(){
        cy.log("verificando")
    }
    
    verificarDadosMinhaConta(){

        cy.get(elementsMinhaConta.cardEmail())
    
    }
}

export default MinhaConta
