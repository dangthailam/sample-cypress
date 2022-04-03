import { Before, Then } from 'cypress-cucumber-preprocessor/steps'
Before(() => {
    cy.request('/actualites').as('PageContent')
})
Then('I check the last page: 30', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $a = $.find('ol[data-e2e="changepage"] li:last-child a')
            const text = $a.text().trim()
            expect(Number(text)).to.equal(30)
        })
})
Then('I check the first page of the second pagination: 5', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $a = $.find('ol[data-e2e="pagination-goto"] li:first-child a')
            console.log($a)
            const text = $a.text().trim()
            expect(text).to.equal('5')
        })
})
Then('I check the second page of the second pagination: 10', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $a = $.find(
                'ol[data-e2e="pagination-goto"] li:nth-child(2) a'
            )
            const text = $a.text().trim()
            expect(text).to.equal('10')
        })
})
Then('I check the page 1 presented', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $a = $.find('ol[data-e2e="changepage"] li:first-child a')
            const text = $a.text().trim()
            expect(text).to.equal('1')
        })
})
Then('I check the button next presented et prev not exist', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $aNext = $.find(
                'div[data-e2e="pagination-page"] a[rel="next"]'
            )
            expect($aNext[0], 'next button').to.not.be.undefined
            const $aPrev = $.find(
                'div[data-e2e="pagination-page"] a[rel="prev"]'
            )
            expect($aPrev[0], 'prev button').to.be.undefined
        })
})
Then('I check the button prev presented et next not exist', () => {
    cy.request('/actualites?page=30')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $aNext = $.find(
                'div[data-e2e="pagination-page"] a[rel="prev"]'
            )
            expect($aNext[0], 'next button').to.not.be.undefined
            const $aPrev = $.find(
                'div[data-e2e="pagination-page"] a[rel="next"]'
            )
            expect($aPrev[0], 'prev button').to.be.undefined
        })
})
Then('I check url ?page=1 doen\'t existe', () => {
    cy.request('/actualites?page=1')
    cy.url().should('not.include', '?page=1')
})
Then('I check url /actualite should visible', () => {
    cy.url().should('not.include', '?page=1')
})
Then('I check the page 2 presented with url ?page=2', () => {
    cy.request('/actualites?page=2')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $a = $.find('ol[data-e2e="changepage"] li:nth-child(2) a')
            const text = $a.text().trim()
            expect(text).to.equal('2')
        })
})
When('I tap on the button to change page {string}', page => {
    cy.visit('/actualites')
    switch (page) {
    case '1':
        cy.get('ol[data-e2e="changepage"] li:first-child')
            .scrollIntoView()
            .click()
        break
    case '2':
        cy.get('ol[data-e2e="changepage"] li:nth-child(2) a')
            .scrollIntoView()
            .click()
        break
    }
})
Then('I check url ?page=2 existe', () => {
    cy.url().should('include', '?page=2')
})
Then('I check have 5 pages min', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $a = $.find('ol[data-e2e="changepage"] li')
            expect($a.length, 'number of pagination').to.be.gte(5)
        })
})
Then('I check have 40 articles', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $a = $.find('section[data-e2e="list-news"] div.item-all-news')
            expect($a.length, 'number of article').to.be.gte(40)
        })
})
Then('I check rel=canonical', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            let canonicalIsFound = false,
                figaroNewsLinkIsFound = false
            $.each(i => {
                // parcourir tous les éléments html
                const tagName = $[i].tagName
                // si élément est un LINK
                if (tagName && tagName === 'LINK') {
                    // si l'élément a attribut 'rel' et sa valeur est 'canonical'
                    canonicalIsFound =
                        $[i].hasAttribute('rel') &&
                        $[i].getAttribute('rel') === 'canonical'
                    // si l'élément a attribut 'href' et sa valeur est 'https://immobilier.lefigaro.fr/actualites'
                    figaroNewsLinkIsFound =
                        $[i].hasAttribute('href') &&
                        $[i].getAttribute('href') ===
                            'https://immobilier.lefigaro.fr/actualites'
                }

                if (canonicalIsFound && figaroNewsLinkIsFound) {
                    return false
                }
            })

            expect(canonicalIsFound).to.equal(true)
            expect(figaroNewsLinkIsFound).to.equal(true)
        })
})
