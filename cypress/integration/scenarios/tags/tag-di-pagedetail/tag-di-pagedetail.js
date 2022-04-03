import { Then, When, Before } from 'cypress-cucumber-preprocessor/steps'
let gaRequests = []
function extractKeyValueFromGARequest(url) {
    const index = url.indexOf('?')
    const urlKeyValue = url
        .substr(index + 1)
        .split('&')
        .map(s => {
            const split = s.split('=')
            return {
                key: split[0],
                value: split[1]
            }
        })
    gaRequests.push(urlKeyValue)
}
function checkGARequest(criteria) {
    cy.checkWholeTags(gaRequests, criteria)
}
Before(() => {
    cy.intercept('https://www.google-analytics.com/**', req => {
        extractKeyValueFromGARequest(req.url)
    })
})
Then('I check tags send on preprod', () => {
    cy.wait(3000).then(() => {
        checkGARequest({
            tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
            t: ['pageview', 'event'],
            cd1: ['preproduction', 'FigaroImmo'],
            cd2: ['liste_annonces', 'production'],
            cd3: ['annonces', 'search'],
            cd20: ['mobile', 'inconnu'],
            cd38: ['annonce%3A%3Adetail%3A%3Aautres']
        })
    })
})
Then('I check tags send on prod', () => {
    cy.wait(3000).then(() => {
        checkGARequest({
            tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
            t: ['pageview', 'event'],
            cd1: ['production', 'FigaroImmo'],
            cd2: ['liste_annonces', 'production'],
            cd3: ['annonces', 'search'],
            cd20: ['mobile', 'inconnu'],
            cd38: ['annonce%3A%3Adetail%3A%3Aautres']
        })
    })
})
When('I tap on the button {string}', text => {
    switch (text) {
    case 'Contacter':
        cy.get(
            '#app > div > main > section.wrapper-full-width > div.toolbar-mobile > div > button.btn.btn-primary.btn-plain > span'
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
