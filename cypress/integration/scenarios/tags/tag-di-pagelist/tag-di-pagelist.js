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
    cy.wait(9000).then(() => {
        checkGARequest({
            tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
            t: ['pageview', 'event'],
            cd1: ['preproduction', 'FigaroImmo'],
            cd2: ['liste_annonces', 'preproduction'],
            cd3: ['annonces', 'search'],
            cd20: ['mobile', 'inconnu'],
            cd38: ['annonce%3A%3Aliste%3A%3Amoteur_avance']
        })
    })
})
Then('I check tags send on prod', () => {
    cy.wait(9000).then(() => {
        checkGARequest({
            tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
            t: ['pageview', 'event'],
            cd1: ['production', 'FigaroImmo'],
            cd2: ['liste_annonces', 'production'],
            cd3: ['annonces', 'search'],
            cd20: ['mobile', 'inconnu'],
            cd38: ['annonce%3A%3Aliste%3A%3Amoteur_avance']
        })
    })
})
When('I tap on the button {string}', text => {
    cy.get('body').then(body => {
        if (body.find('._acc_close').length > 0) {
            cy.get('._acc_close').click({ multiple: true, force: true })
        }
        switch (text) {
        case 'Contacter':
            cy.get(
                '[data-e2e="bloc-list-item"]:nth-of-type(3)'
            ).scrollIntoView()
            cy.get(
                '[data-e2e="bloc-list-item"]:nth-of-type(3) button.btn-to-contact'
            ).click()
            break
        case 'Envoyer mon message':
            cy.intercept({
                url: '**/rest/alert',
                method: 'POST'
            }).as('sendAlert')
            cy.get('[data-e2e="annonce-send-message"]').click()
            cy.wait('@sendAlert', { timeout: 60000 })
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
})
When('I search alert email address {string}', text => {
    cy.get('[data-e2e="create-alert-content"] [data-e2e="alert-email"]').type(
        text
    )
})
When('I search contact email address {string}', text => {
    cy.wait(200)
    cy.get('body').then($body => {
        if (
            $body.find(
                '[data-e2e="create-alert-content"] [data-e2e="submit-alert"]'
            ).length
        ) {
            cy.get('[data-e2e="contact-close"]').click()
        }
        cy.get(
            '[data-e2e="create-alert-content"] [data-e2e="contact-email"]'
        ).type(text)
    })
})
When('I search phone number {string}', phoneNumber => {
    cy.get('[data-e2e="contact-phone"]').type(phoneNumber)
})
When('I search name {string}', name => {
    cy.wait(1000)
    cy.get('body').then($body => {
        if (
            $body.find(
                '[data-e2e="create-alert-content"] [data-e2e="submit-alert"]'
            ).length
        ) {
            cy.get('[data-e2e="contact-close"]').click()
        }
        cy.get('[data-e2e="contact-name"]').type(name)
    })
})
When('I search {string}', text => {
    const encoded = encodeURIComponent(text.trim()).replace(/'/g, '%27')
    cy.intercept('**/locations?q=' + encoded).as('typing' + encoded)
    cy.get('[data-e2e-input="search"]').type(text)
    if (text.trim()) {
        cy.wait('@typing' + encoded, { timeout: 60000 })
    }
})
