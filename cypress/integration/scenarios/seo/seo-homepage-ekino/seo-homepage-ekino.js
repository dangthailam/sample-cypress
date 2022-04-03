import { Before, Then } from 'cypress-cucumber-preprocessor/steps'
Before(() => {
    cy.request('/').as('PageContent')
})
Then('I check h2', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $h2 = $.find(
                'div[data-e2e="netting-france-hp"] h2[data-e2e="h2-first-hp"]'
            )
            const text = $h2.text().trim()
            expect(text).to.equal('Nos annonces immobilières en France')
        })
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $h2 = $.find(
                'div[data-e2e="netting-area-hp"] h2[data-e2e="h2-second-hp"]'
            )
            const text = $h2.text().trim()
            expect(text).to.equal('Trouvez votre bien par région')
        })
})
Then('I check 4 blocs and 10 items in bloc', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $nettingBloc = $.find(
                'div[data-e2e="netting-france-hp"] div[data-e2e="netting-bloc-hp"] ul[data-e2e="netting-item-hp"]'
            )
            expect($nettingBloc.length).to.be.gte(4)
        })
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $nettingBlocLink = $.find(
                'div[data-e2e="netting-france-hp"] div[data-e2e="netting-bloc-hp"] ul[data-e2e="netting-item-hp"] li[data-e2e="netting-item-link-hp"]'
            )
            expect($nettingBlocLink.length).to.be.gte(10)
        })
})
Then('I check only 1 list in region and 24 items in bloc', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $nettingBlocLink = $.find(
                'div[data-e2e="netting-area-hp"] div[data-e2e="netting-bloc-hp"] ul[data-e2e="netting-item-hp"]'
            )
            expect($nettingBlocLink.length).to.be.gte(1)
        })
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $nettingBlocLink = $.find(
                'div[data-e2e="netting-area-hp"] div[data-e2e="netting-bloc-hp"] ul[data-e2e="netting-item-hp"] li[data-e2e="netting-item-link-hp"]'
            )
            expect($nettingBlocLink.length).to.be.gte(24)
        })
})
Then('I check url when I choose Buy Area', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $ssrLinks = $.find(
                '[data-e2e="netting-area-hp"] div[data-e2e="buy-area"] ul[data-e2e="netting-item-hp"] li[data-e2e="netting-item-link-hp"] a'
            ).toArray() // SSR return all links with data-e2e-link
            $ssrLinks.forEach(a => {
                const url = a.href
                let checkingUrl = `/immobilier-vente-bien-${a.innerHTML
                    .toLowerCase()
                    .replace(new RegExp('-|\'| ', 'g'), '+')
                    .replace(new RegExp('é', 'g'), 'e')
                    .replace(new RegExp('ô', 'g'), 'o')}.html`

                expect(url).to.satisfy(u => u.endsWith(checkingUrl)) // vérifier si url réel contient bien url comme il est construit
            })
        })
})
Then('I check url when I choose Rent Area', () => {
    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $ssrLinks = $.find(
                '[data-e2e="netting-area-hp"] div[data-e2e="rent-area"] ul[data-e2e="netting-item-hp"] li[data-e2e="netting-item-link-hp"] a'
            ).toArray() // SSR return all links with data-e2e-link
            $ssrLinks.forEach(a => {
                const url = a.href
                let checkingUrl = `/immobilier-location-bien-${a.innerHTML
                    .toLowerCase()
                    .replace(new RegExp('-|\'| ', 'g'), '+')
                    .replace(new RegExp('é', 'g'), 'e')
                    .replace(new RegExp('ô', 'g'), 'o')}.html`

                expect(url).to.satisfy(u => u.endsWith(checkingUrl)) // vérifier si url réel contient bien url comme il est construit
            })
        })
})
Then('I check url on netting France', () => {
    const postal = {
        paris: '',
        lyon: '',
        toulouse: '31000',
        nantes: '44000',
        bordeaux: '33000',
        marseille: '',
        rennes: '35000',
        nice: '06000',
        montpellier: '34000',
        strasbourg: '67000',
        angers: '49000',
        'la+rochelle': '17000',
        'le+mans': '72000'
    }

    cy.get('@PageContent')
        .its('body')
        .then(html => {
            const $ = Cypress.$(html)
            const $ssrLinks = $.find(
                '[data-e2e="netting-france-hp"] ul[data-e2e="netting-item-hp"] li a'
            ).toArray() // SSR return all links with data-e2e-link
            $ssrLinks.forEach(a => {
                const url = a.href
                let checkingUrl = '/immobilier-'
                const texts = a.innerHTML.split(' ') // Achat appartement Paris => ['Achat', 'appartement', 'Paris']
                if (!texts || texts.length < 3) return false

                if (texts[0] === 'Achat') {
                    checkingUrl += 'vente-'
                } else {
                    checkingUrl += 'location-'
                }

                checkingUrl += `${texts[1].toLowerCase()}-` // appartement ou maison

                const city = texts
                    .slice(2)
                    .map(t => t.toLowerCase())
                    .join('+')

                checkingUrl += city // nom de ville (paris, lyon...)

                if (postal[city]) {
                    checkingUrl += `+${postal[city]}`
                } // ajouter code postal s'il y en a un

                checkingUrl += '.html' // ajouter .html à la fin

                expect(url).to.satisfy(u => u.endsWith(checkingUrl)) // vérifier si url réel contient bien url comme il est construit
            })
        })
})
