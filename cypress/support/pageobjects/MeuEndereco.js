import EnderecoElements from "../elements/EnderecoElements";
import waitLoader from "../util/waitLoader";

const enderecoElements= new EnderecoElements

class MeuEndereco{
    paginaMeuEndereco(){
        cy.visit("https://www.panvel.com/panvel/adicionarEndereco.do")
        waitLoader()
    }

    atualizarEndereco(){

        cy.get(enderecoElements.barraDeCPF()).clear().type('91750200')
        cy.get(enderecoElements.barraDeComplemento()).clear().type('Bloco x')
        cy.get(enderecoElements.barraDeIdentificacao()).clear().type('Apartamento')
        cy.get(enderecoElements.barraDeNumero()).clear().type('338')
        cy.get(enderecoElements.barraDeReferencia()).clear().type('Ao lado de tal local')
        cy.get(enderecoElements.botaoAdicionarEndereco()).click()
    }
    
    
}

export default MeuEndereco