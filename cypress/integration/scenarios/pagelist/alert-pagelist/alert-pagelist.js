import { Then, When } from 'cypress-cucumber-preprocessor/steps'
When('I tap on the button {string}', (text) => {
    cy.get('body').then((body) => {
        if (body.find('._acc_close').length > 0) {
            cy.get('._acc_close').click({ multiple: true, force: true })
        }
        switch (text) {
        case 'Créer une alerte':
            cy.get('[data-e2e="create-alert"]').first().click()
            break
        case 'Valide créer une alerte':
            cy.intercept('POST', '**/rest/alert').as('sendAlert')
            cy.get(
                '[data-e2e="create-alert-content"] [data-e2e="submit-alert"]'
            ).click()
            cy.wait('@sendAlert', { timeout: 60000 })
            break
        case 'Je souhaite':
            cy.get(
                '[data-e2e="create-alert-content"] [data-e2e="alert-checkbox"]'
            ).click()
            cy.get(
                '[data-e2e="create-alert-content"] [data-e2e="alert-phone"]'
            ).type('0678909878')
            break
        case 'J\'accepte':
            cy.get(
                '[data-e2e="create-alert-content"][data-e2e="contact-checkbox"]'
            ).click()
            break
        case 'Fermer message':
            cy.get('[data-e2e="contact-close"]').click()
            break
        }
    })
})
When('I search alert email address', () => {
    const email = 'tbnle' + Date.now() + '@yopmail.com'
    cy.get('[data-e2e="create-alert-content"] [data-e2e="alert-email"]').type(
        email
    )
})
When('I search contact email address {string}', (text) => {
    cy.get('[data-e2e="create-alert-content"] [data-e2e="contact-email"]').type(
        text
    )
})
Then('I see the message {string}', (message) => {
    switch (message) {
    case 'Votre alerte a bien été créée':
        cy.get('[data-e2e="message-alert-success"]').contains(message)
        break
    case 'Votre demande d\'information a bien été envoyée':
        cy.get('[data-e2e="message-di-success"]').should('be.visible')
        break
    case 'Le champ "Nom" est obligatoire':
        cy.get('[data-e2e="warning"]').should('be.visible')
        break
    }
})
Then('I see message error alert', () => {
    cy.get('[data-e2e="warning"]').contains(
        'Vous avez déjà créé une alerte email avec les mêmes critères.'
    )
})
When('I search alert with the same email', () => {
    cy.get('[data-e2e="create-alert-content"] [data-e2e="alert-email"]').click().type(
        'tbnle@yopmail.com'
    )
})
