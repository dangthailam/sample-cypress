import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

Given('Mocker Server', () => {
    cy.server()
    cy.route({
        method: 'GET',
        url: '**/classifieds-with-size?*',
        response: {},
        status: 500
    }).as('classifiedsRoute')
})
When('I tap on the button {string}', text => {
    cy.get('body').then(body => {
        if (body.find('._acc_close').length > 0) {
            cy.get('._acc_close').click({ multiple: true, force: true })
        }
        switch (text) {
        case 'Budget':
            cy.get(
                '[data-e2e="search-budget"] >.dropdown-button__label'
            ).click()
            break
        case 'Valider budget':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="search-validate"]'
            ).click()
            break
        }
    })
})
When(
    'I search Budget {string} with {string}, {string} with {string}',
    (budgetMin, amountBudgetMin, budgetMax, amountBudgetMax) => {
        cy.scrollTo(0, 0)
        cy.get('[data-e2e-input="budget-min"]')
            .should('have.attr', 'placeholder', budgetMin)
            .type(amountBudgetMin)
        cy.get('[data-e2e-input="budget-max"]')
            .should('have.attr', 'placeholder', budgetMax)
            .type(amountBudgetMax)
    }
)
Then('I get error page', () => {
    cy.wait('@classifiedsRoute', { timeout: 60000 })
    cy.get('[data-e2e="message-error"]').should(
        'have.text',
        ' La page demandée n\'existe pas. '
    )
})
