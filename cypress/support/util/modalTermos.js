
module.exports = () => {
    if (cy.get('[class="cookies desktop ng-star-inserted"]').should('be.visible')) {
        cy.get('.desktop > .cookies__close > .close-button > .material-icons').click()
    }
}