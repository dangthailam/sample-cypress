import { Then, When } from 'cypress-cucumber-preprocessor/steps'

When('I check the article', () => {
    cy.get('.container-main-news__subsection', { timeout: 60000 }).should(
        'be.visible'
    )
})
Then('I can see the url', () => {
    cy.get('[data-e2e="item-news"] h3 a')
        .invoke('attr', 'href')
        .should('be.exist')
    cy.get('[data-e2e="item-news"] h3 a')

        .invoke('attr', 'target')
        .should('be.equal', '_blank')
})
When('I tap on the button {string}', text => {
    switch (text) {
    case 'Voir tous les articles':
        cy.get('[data-e2e-button="page-news"]', { timeout: 60000 }).click()
        break
    }
})
Then('I go to the page news and the news appear', () => {
    cy.get('h1.title-news')
        .invoke('text')
        .then(title => {
            expect(title).to.contain('Actualités & conseils')
        })
})
