import { Given, Then } from 'cypress-cucumber-preprocessor/steps'
Then('I check url and title of the buttons following', (datatable) => {
    console.log(datatable)
    datatable.rawTable.forEach((data) => {
        const button = data[0]
        const url = data[1]
        const title = data[2]
        const querySelector = '[data-e2e="fi-footer-' + button + '"]'
        cy.get(querySelector).should('be.exist')
        cy.get(querySelector)
            .invoke('attr', 'target')
            .should('be.equal', '_blank')
        cy.get(querySelector).invoke('attr', 'href').should('be.equal', url)
        cy.get(querySelector).invoke('attr', 'title').should('contain', title)
    })
})
Given('I tap on the button Paramétrer les cookies', () => {
    cy.get('[data-e2e="fi-footer-consent-parameter"]').click({ force: true })
})
Then('The pop up appear', () => {
    cy.wait(2000)
    cy.get(window).then((w) => {
        const appconsent = w[0].top.top.aut.document.querySelector(
            '#appconsent'
        )
        expect(appconsent).not.to.be.undefined
    })
})
