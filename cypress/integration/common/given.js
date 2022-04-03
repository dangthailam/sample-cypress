import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('I open {string}', url => {
    cy.intercept('https://www.google-analytics.com/**').as('loadGAFile')
    cy.intercept('https://cdn.appconsent.io/tcf2/28.5.2').as('checkAppConsent')
    cy.visit(url)
    cy.wait('@loadGAFile', { timeout: 30000 })
})

Given('I accept all cookies', () => {

    function checkAppConsentIframe() {
        cy.get('body').then((body) => {
            if (body.find('#appconsent iframe').length > 0) {
                cy.get('#appconsent iframe').its('0.contentDocument')
                    .its('body')
                    .then(appConsentBody => {
                        cy.wrap(appConsentBody)
                            .find('.button__acceptAll')
                            .click()
                        // wait for GA file loaded
                        cy.wait('@loadGAFile', { timeout: 30000 })
                    })
            }
        })
    }

    // cy.wait('@checkAppConsent', { timeout: 60000 })

    // cy.wait(6000)

    checkAppConsentIframe()

})
/**
 * 1. Cliquer sur le bouton Paramètre Cookie
 * 2. Attendre jusqu'à ce que la fenêtre de Paramètre Cookie s'affiche
 * 3. Cliquer sur le bouton Tout Accepter
 * 4. Cliquer sur le bouton Enregistrer
 * 5. Attendre jusqu'à ce que le fichier Google Analytics se finit de charger
 */
// Given('I accept all cookies', () => {
//     cy.intercept('https://collector.appconsent.io/t2.gif**')
//         .as('cookieParameter')
//     cy.get('[data-e2e="fi-footer-consent-parameter"]').click({ force: true })
//     // wait for cookie parameter window loaded
//     cy.wait('@cookieParameter', { timeout: 30000 })

//     cy.window().then(w => {
//         const appconsent = w.document.querySelector(
//             '#appconsent'
//         )
//         cy.wrap(appconsent).find('iframe')
//             .its('0.contentDocument')
//             .its('body')
//             .then(appConsentBody => {
//                 cy.wrap(appConsentBody)
//                     .find(' > div > div > div > div > footer > section.sc-1cm9hmm-1.kwwSMW > a:nth-child(2)', { timeout: 60000 })
//                     .click()
//                 cy.wrap(appConsentBody)
//                     .find('.button__acceptAll')
//                     .click()
//                 // wait for GA file loaded
//                 cy.wait('@loadGAFile', { timeout: 30000 })
//             })
//     })
// })
Given('I open {string} in new window', (url) => {
    cy.intercept('https://www.google-analytics.com/analytics.js').as('loadGAFile')
    cy.intercept('https://cdn.appconsent.io/tcf2/28.5.2').as('checkAppConsent')
    cy.openWindow(url)
})
