import { Then, When } from 'cypress-cucumber-preprocessor/steps'
When('I tap on the button {string}', text => {
    switch (text) {
    case 'Contacter':
        cy.get(
            '#app > div > main > section.wrapper-full-width > div.toolbar-mobile > div > button.btn.btn-primary.btn-plain > span'
        ).click()
        break
    case 'Appeler':
        cy.get(
            '#app > div > main > section.wrapper-full-width > div.toolbar-mobile > div > button.btn.btn-shadowed.btn-primary > span'
        ).click()
        break
    case 'Envoyer mon message':
        cy.get('#popin-inquiry [data-e2e="annonce-send-message"]').click()
        break
    case 'Fermer':
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
When('I search contact email address {string}', text => {
    cy.get(
        '#popin-inquiry [data-e2e="contact-email"]'
    ).type(text)
})
When('I search contact new email address', () => {
    const email = 'tbnle' + Date.now() + '@yopmail.com'
    cy.get('#popin-inquiry [data-e2e="contact-email"]').type(
        email
    )
})
When('I search phone number {string}', phoneNumber => {
    cy.get('#popin-inquiry [data-e2e="contact-phone"]').type(phoneNumber)
})
When('I search name {string}', name => {
    cy.get('#popin-inquiry [data-e2e="contact-name"]').type(name)
})
When('I search {string}', text => {
    const encoded = encodeURIComponent(text.trim()).replace(/'/g, '%27')
    cy.intercept('**/locations?q=' + encoded).as('typing' + encoded)
    cy.get('[data-e2e-input="search"]').type(text)
    if (text.trim()) {
        cy.wait('@typing' + encoded, { timeout: 60000 })
    }
})
Then('I see the message success', () => {
    cy.intercept('GET', 'https://analytics.figarocms.fr**')
    cy.get('#app > div > main > div.notifications.is-visible > div > div > div > p').should(
        'be.visible'
    )
})
Then('I see the message error', () => {
    cy.get('#detail-email-hint').should(
        'be.visible'
    )
})
