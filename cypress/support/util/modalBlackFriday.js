

module.exports = () => {
    if (cy.get('[class="roulette-lightbox"]').should('be.visible')) {
        cy.get('.icon__close > svg').click()
    }
}