/**
 * Função para aguardar o loader do site Panvel
 */
module.exports = () => {
    cy.get('#loader', { timeout: 40000 }).should('be.not.visible');
}