import { Then } from 'cypress-cucumber-preprocessor/steps'

Then('I check links', dataTable => {
    dataTable.rawTable.slice(1).forEach(data => {
        const url = data[0] // first column of line
        const text = data[1] // second column of line
        const query = 'a[data-e2e="accompanying-link"][href="' + url + '"]'
        cy.get(query).should('exist')
        cy.get(query)
            .invoke('text')
            .should('be.equal', text)
        cy.get(query).then($a => {
            cy.wrap($a)
                .invoke('attr', 'target')
                .then(target => {
                    expect(target || '').to.equal(data[2])
                })
        })
        cy.request(url)
            .its('body')
            .then(html => {
                const $ = Cypress.$(html)
                const $h1 = $.find('h1[data-e2e="message-error"]')
                expect($h1).to.not.be.undefined
            })
    })
})
