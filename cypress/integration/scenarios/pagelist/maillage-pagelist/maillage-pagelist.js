import { Then } from 'cypress-cucumber-preprocessor/steps'
Then('I see title {string} on maillage', text => {
    cy.get('[data-e2e="maillage-facet-title"] > a').contains(text)
})
