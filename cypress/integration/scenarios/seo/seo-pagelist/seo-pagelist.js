import { Before, Then } from 'cypress-cucumber-preprocessor/steps'
Before(() => {
    cy.request('/annonces/immobilier-vente-bien-nice+06100.html').as(
        'PageContent'
    )
})
Then('I check h1', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $h1 = $.find('h1[data-e2e="results-by-locations"]')
            const text = $h1.text().trim()
            expect(text).to.contains('Vente biens immobiliers à Nice (06)')
        })
})
Then('I check bloc item', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $divListItem = $.find(
                'section[data-e2e="bloc-list-annonces"] div[data-e2e="bloc-list-item"]'
            )
            expect($divListItem.length).to.be.gte(3)
        })
})
Then('I check bloc guide', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $divBlocGuide = $.find('div[data-e2e="bloc-guide"]')
            expect($divBlocGuide.length).to.be.gte(3)
        })
})
Then('I check news location', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $liNewsLocation = $.find('ul[data-e2e="news-location"] li')
            expect($liNewsLocation.length).to.be.gte(3)
        })
})
Then('I check rooms num', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $liNbRooms = $.find('ul[data-e2e="rooms-num"] li')
            expect($liNbRooms.length).to.be.gte(3)
        })
})
Then('I check Breadcrumb', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $spanBreadCrumb = $.find('span[data-e2e="latest-location"]')
            const latestLocation = $spanBreadCrumb.text().trim()
            expect(latestLocation.endsWith('Nice (06)')).to.be.true
        })
})
Then('I check number of page', () => {
    cy.request(
        '/annonces/immobilier-vente-appartement-aix+en+provence+13090.html?page=2'
    )
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            let contentIsFound = false
            $.each(i => {
                // parcourir tous les éléments html
                const tagName = $[i].tagName
                // si élément est meta
                if (tagName && tagName === 'META') {
                    contentIsFound =
                        $[i].hasAttribute('property') &&
                        $[i].getAttribute('property') === 'og:title'
                    // si l'élément a attribut 'property' et sa valeur est og:title
                    if (contentIsFound) {
                        expect(
                            $[i].getAttribute('content'),
                            'meta\'s content'
                        ).to.include('page 2')
                        return false
                    }
                }
            })
        })
})
Then('I check content on meta with name description', () => {
    cy.request('/annonces/immobilier-vente-appartement-nice+06000.html')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            let nameIsFound = false,
                contentIsFound = false
            $.each(i => {
                // parcourir tous les éléments html
                const tagName = $[i].tagName
                // si élément est un META
                if (tagName && tagName === 'META') {
                    console.log($[i])
                    // si l'élément a attribut name: description
                    nameIsFound =
                        nameIsFound ||
                        ($[i].hasAttribute('name') &&
                            $[i].getAttribute('name') === 'description')
                    // si l'élément a attribut 'content' et sa valeur
                    contentIsFound =
                        contentIsFound ||
                        ($[i].hasAttribute('content') &&
                            $[i]
                                .getAttribute('content')
                                .includes(
                                    'Vente d\'appartement à Nice (06) disponibles, à consulter sur Figaro Immobilier'
                                ))
                }
                if (nameIsFound && contentIsFound) {
                    return false
                }
            })
            expect(nameIsFound, 'name: description').to.equal(true)
            expect(contentIsFound, 'content').to.equal(true)
        })
})
Then('I check url of line Ariane', () => {
    const query = 'ol[data-e2e="fil-ariane"] li:nth-of-type(2) a'
    cy.visit('/annonces/immobilier-vente-bien-bretagne.html')
    cy.get(query)
        .scrollIntoView()
        .click()
    cy.url().should('include', '/annonces/immobilier-vente-bien-france.html')
    cy.visit('/annonces/immobilier-location-appartement-bretagne.html')
    cy.get(query)
        .scrollIntoView()
        .click()
    cy.url().should('include', '/annonces/immobilier-location-bien-france.html')
})
Then('I check url of line Ariane en prod', () => {
    const query = 'ol[data-e2e="fil-ariane"] li:nth-of-type(2) a'
    cy.visit('/annonces/immobilier-vente-bien-nice+06100.html')
    cy.get(query)
        .scrollIntoView()
        .click()
    cy.url().should('include', '/annonces/immobilier-vente-bien-france.html')
    cy.visit('/annonces/immobilier-location-bien-nice+06100.html')
    cy.get(query)
        .scrollIntoView()
        .click()
    cy.url().should('include', '/annonces/immobilier-location-bien-france.html')
})
