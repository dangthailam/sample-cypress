import { Then, When, Before } from 'cypress-cucumber-preprocessor/steps'
let gaRequests = []
function extractKeyValueFromGARequest(url) {
    const index = url.indexOf('?')
    const urlKeyValue = url
        .substr(index + 1)
        .split('&')
        .map((s) => {
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
    cy.intercept('https://www.google-analytics.com/**', (req) => {
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
When('I tap on the button {string}', (text) => {
    cy.get('body').then((body) => {
        if (body.find('._acc_close').length > 0) {
            cy.get('._acc_close').click({ multiple: true, force: true })
        }
        switch (text) {
        case 'Créer une alerte':
            cy.wait(3000)
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
