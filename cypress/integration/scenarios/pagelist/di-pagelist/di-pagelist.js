import { Then, When } from 'cypress-cucumber-preprocessor/steps'
When('I tap on the button {string}', (text) => {
    switch (text) {
    case 'Contacter':
        cy.get(
            '[data-e2e="bloc-list-item"]:nth-of-type(3)'
        ).scrollIntoView()
        cy.wait(2000)

        cy.checkAndCloseContactPopup()

        cy.get(
            '[data-e2e="bloc-list-item"]:nth-of-type(3) button.btn-to-contact'
        ).click()
        break
    case 'Envoyer mon message':
        cy.intercept({
            url: '/rest/v2/inquiry/accommodation/program',
            method: 'POST'
        }).as('sendAlert')
        cy.get('[data-e2e="annonce-send-message"]').click()
        cy.wait('@sendAlert', { timeout: 60000 })
        break
    case 'Envoyer mon message 2':
        cy.get('[data-e2e="annonce-send-message"]').click()
        break
    case 'Fermer':
        cy.get('#modal > button').click()
        break
    case 'Fermer 2':
        cy.get('[data-e2e="contact-close"]').click()
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
    case 'Recherche':
        cy.intercept('**/classifieds-with-size?*').as('searching')
        cy.get('[data-e2e="search"]').click()
        cy.wait('@searching', { timeout: 60000 })
        break
    }
})
When('I search alert email address {string}', (text) => {
    cy.get('[data-e2e="create-alert-content"] [data-e2e="contact-email"]').type(
        text
    )
})
When('I search contact new email address', () => {
    const email = 'tbnle' + Date.now() + '@yopmail.com'
    cy.get('[data-e2e="create-alert-content"] [data-e2e="contact-email"]').type(
        email
    )
})
When('I search contact email address {string}', (text) => {
    cy.wait(1000)

    cy.checkAndCloseContactPopup()

    cy.get('[data-e2e="create-alert-content"] [data-e2e="contact-email"]').type(
        text
    )
})
Then('I see the message {string}', (message) => {
    switch (message) {
    case 'Votre alerte a bien été créée':
        cy.intercept('POST', 'https://ib.adnxs.com/ut/v3').as('messagesucces')
        cy.get('[data-e2e="message-alert-success"]').contains(message)
        cy.wait('@messagesucces', { timeout: 60000 })
        break
    case 'Votre demande d\'information a bien été envoyée':
        cy.get('[data-e2e="message-di-success"]').should('be.visible')
        break
    case 'Le champ "Nom" est obligatoire':
        cy.get('[data-e2e="warning"]').should('be.visible')
        break
    }
})
When('I search phone number {string}', (phoneNumber) => {
    cy.get('[data-e2e="contact-phone"]').type(phoneNumber)
})
When('I search name {string}', (name) => {
    cy.wait(1000)
    cy.checkAndCloseContactPopup()
    cy.get('[data-e2e="contact-name"]').type(name)
})
Then('I see the list items', () => {
    cy.get('[data-e2e="bloc-list-item"]').should('be.visible')
})
Then('I see {string} in the location', (text) => {
    cy.get('[data-e2e-input="search-location-pl"]').contains(text)
})
When('I search {string}', (text) => {
    const encoded = encodeURIComponent(text.trim()).replace(/'/g, '%27')
    cy.intercept('**/locations?q=' + encoded).as('typing' + encoded)
    cy.get('[data-e2e-input="search"]').type(text)
    if (text.trim()) {
        cy.wait('@typing' + encoded, { timeout: 60000 })
    }
})
When('I select {string}', () => {
    cy.checkAndCloseContactPopup()
    cy.get('[data-e2e="location"]').first().click()
})
