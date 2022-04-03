import { Then, When } from 'cypress-cucumber-preprocessor/steps'

When('I tap on the button {string}', (text) => {
    switch (text) {
    case 'Recherche':
        cy.intercept('**/classifieds?*').as('searching')
        cy.get('[data-e2e="search"]').click()
        cy.wait('@searching', { timeout: 60000 })
        break
    case 'Back':
        cy.go('back')
        break
    case 'Louer':
        cy.get('[data-e2e="rent"]').click()
        break
    }
})
Then('I see url {string} in the button Estimer', (partenaire) => {
    cy.get('[data-e2e="estimate"]').then(($a) => {
        const url = $a.prop('href')
        const target = $a.prop('target')
        expect(url).to.equal(partenaire)
        expect(target).to.equal('_blank')
    })
})
Then('I see {string} in h1', (str) => {
    cy.get('[data-e2e="estimate"]').then(($a) => {
        const url = $a.prop('href')
        cy.request(url)
            .its('body')
            .then((html) => {
                const $ = Cypress.$(html)
                const $h1 = $.find('h1.h1-like')
                const text = $h1.text().trim()
                expect(text).to.equal(str)
            })
    })
})
Then('I see urls and titles in the partner buttons', (dataTable) => {
    dataTable.rawTable.forEach((line) => {
        const action = line[0]
        const url = line[1]
        const checkingTitle = line[2]
        if (action) {
            cy.get('[data-e2e="' + action + '"]').click()
        }
        const query = '[data-e2e="partner"][href="' + url + '"]'
        cy.get(query).should('be.visible')
        cy.get(query).invoke('attr', 'target').should('to.equal', '_blank')
        cy.request(url)
            .its('body')
            .then((body) => {
                const title = body.substring(
                    body.indexOf('<title>') + '<title>'.length,
                    body.indexOf('</title>')
                )
                expect(title).to.equal(checkingTitle)
            })
    })
})
Then('I see urls and titles button Besoin credit', () => {
    cy.get('[data-e2e="rent"]').click()
    cy.get('[data-e2e="partner"]').then(($a) => {
        const url = $a.prop('href')
        cy.request(url)
            .its('body')
            .then((body) => {
                const title = body.substring(
                    body.indexOf('<title>') + '<title>'.length,
                    body.indexOf('</title>')
                )
                expect(title).to.equal(
                    'Simulation Crédit en Ligne | Simulateur Emprunt | Cofidis'
                )
            })
    })
})
Then('I see {string}, {string}', () => {
    cy.get('[data-e2e="location"]').should('be.visible')
    cy.get('[data-e2e="type-location"]').should('be.visible')
})
When('I select {string}', () => {
    cy.scrollTo(50, 0)
    cy.get('body').then((body) => {
        if (body.find('._acc_close').length > 0) {
            cy.get('._acc_close').click({ multiple: true, force: true })
        }

        cy.get('[data-e2e="location"]', { timeout: 60000 }).first().click()
    })
})
When('I search {string}', (text) => {
    const encoded = encodeURIComponent(text.trim()).replace(/'/g, '%27')
    cy.intercept('**/locations?q=' + encoded).as('typing' + encoded)
    cy.get('[data-e2e-input="search"]').type(text)
    if (text.trim()) {
        cy.wait('@typing' + encoded, { timeout: 60000 })
    }
})
Then('I see url {string}', (url) => {
    cy.url().should('include', url)
})
Then('I see {string} in the location', (text) => {
    cy.get('[data-e2e-input="search-pl"] > span').contains(text, { delay: 80 })
})
Then('I see {string} in the result ad of the PL', (text) => {
    cy.get('[data-e2e="results-by-locations"]').contains(text, { delay: 80 })
})
Then('I see the list items', () => {
    cy.get('div[data-e2e="bloc-list-item"]', { timeout: 60000 }).should(
        'be.visible'
    )
})
Then('I see the number {string}', (text) => {
    cy.intercept('GET', 'https://tagger.opecloud.com/lefigaro/v2/**').as('searching')
    cy.wait('@searching', { timeout: 60000 })
    cy.scrollTo(100, 0)
    cy.get('[data-e2e="list-item-details-location"]')
        .invoke('text')
        .then((text1) => {
            console.log(text1, text)
            expect(text1.endsWith(text)).to.be.true
        })
})
When('I tap on the search bar', () => {
    cy.get('[data-e2e-input="search"]').click()
})
Then('I see {string}', (text) => {
    switch (text) {
    case 'Dernières recherches':
        cy.get('[data-e2e="last-search"]').should('be.visible')
        break
    case '500 000 € max':
        // cy.get('[data-e2e="search-budget"]').click()
        cy.get(
            '[data-e2e="search-budget"]'
        ).should('be.visible')
        break
    case '20m2':
        cy.get(
            '[data-e2e="search-criteria-list"] [data-e2e="search-criteria"] > div > span'
        ).click()
        cy.get('[data-e2e-input="area-min"]').should('be.visible')
        break
    }
})
Then('I see the message error {string}', (text) => {
    cy.get('[data-e2e="warning"]').should('have.text', text)
})
When('I search Budget {string} with {string}', (budgetMax, amountBudgetMax) => {
    cy.get('[data-e2e="all-criterias"]').click()
    cy.get('[data-e2e-input="budget-max"]')
        .should('have.attr', 'placeholder', budgetMax)
        .type(amountBudgetMax)
})
When(
    'I search Surface {string} with {string}',
    (surfaceMin, amountSurfaceMin) => {
        cy.get('[data-e2e="all-criterias"]').click()
        cy.get('[data-e2e-input="area-min"]')
            .should('have.attr', 'placeholder', surfaceMin)
            .type(amountSurfaceMin)
    }
)
Then('I see url {string} in the button Poser ma question', (forum) => {
    cy.get('[data-e2e="question"]').then(($a) => {
        const url = $a.prop('href')
        expect(url).to.equal(forum)
    })
})
Then('I see the Home Page', () => {
    cy.get('[data-e2e="h1-hp"]').should('be.visible')
})
Then('I see {string} in Forum', (str) => {
    cy.get('[data-e2e="question"]').then(($a) => {
        const url = $a.prop('href')
        cy.request(url)
            .its('body')
            .then((body) => {
                const title = body.substring(
                    body.indexOf('<title>') + '<title>'.length,
                    body.indexOf('</title>')
                )
                expect(title).to.equal(str)
            })
    })
})
Then('I see the button partner {string}', (partner) => {
    switch (partner) {
    case 'Calculez vos mensualités':
        cy.get('[data-e2e="button-partner"]').contains(
            'Calculez vos mensualités'
        )
        break
    case 'Besoin d\'un crédit':
        cy.get('[data-e2e="button-partner"]').contains(
            'Besoin d\'un crédit ?'
        )
        break
    }
})
