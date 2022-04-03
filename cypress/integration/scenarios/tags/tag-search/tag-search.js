import { When, Then, Before } from 'cypress-cucumber-preprocessor/steps'

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

When('I tap on the button {string}', (text) => {
    switch (text) {
    case 'Louer':
        cy.get('[data-e2e="rent"]').click()
        break
    case 'Acheter':
        cy.get('[data-e2e="buy"]').click()
        break
    case 'Recherche':
        cy.intercept('**/classifieds?*').as('searching')
        cy.get('[data-e2e="search"]').click()
        cy.wait('@searching', { timeout: 60000 })
        break
    }
})
When('I search {string}', (text) => {
    cy.intercept('**/locations?q=' + text).as('typing' + text)
    cy.get('[data-e2e-input="search"]').type(text, { delay: 80 })
    if (text.trim()) {
        cy.wait('@typing' + text, { timeout: 60000 })
    }
})
Then('I check tags send on prod {string}', (text) => {
    console.log('__________' + text + '____________')
    switch (text) {
    case 'Acheter / Search':
        cy.get('[data-e2e="search"]')
            .click()
            .then(() => {
                checkGARequest({
                    t: 'event',
                    ul: ['fr', 'fr-fr'],
                    ec: 'navigation',
                    ea: 'click',
                    el: encodeURIComponent('hp::Rechercher::Acheter::0::')
                })
            })

        break
    case 'Louer / Search':
        cy.get('[data-e2e="search"]')
            .click()
            .then(() => {
                checkGARequest({
                    t: 'event',
                    ul: ['fr', 'fr-fr'],
                    ec: 'navigation',
                    ea: 'click',
                    el: encodeURIComponent('hp::Rechercher::Louer::0::')
                })
            })
        break
    case 'Acheter + Location / Search':
        cy.get('[data-e2e="search"]')
            .click()
            .then(() => {
                checkGARequest({
                    t: 'event',
                    ul: ['fr', 'fr-fr'],
                    ec: 'navigation',
                    ea: 'click',
                    el: encodeURIComponent('hp::Rechercher::Acheter::1::')
                })
            })
        break
    case 'Acheter + Critère / Search':
        cy.get('[data-e2e="search"]')
            .click()
            .then(() => {
                checkGARequest({
                    t: 'event',
                    ul: ['fr', 'fr-fr'],
                    ec: 'navigation',
                    ea: 'click',
                    el: encodeURIComponent(
                        'hp::Rechercher::Acheter::1::_price'
                    )
                })
            })
        break
    case 'Acheter + Critère ( budget + surface)/ Search':
        cy.get('[data-e2e="search"]')
            .click()
            .then(() => {
                checkGARequest({
                    t: 'event',
                    ul: ['fr', 'fr-fr'],
                    ec: 'navigation',
                    ea: 'click',
                    el: encodeURIComponent(
                        'hp::Rechercher::Acheter::1::area_price'
                    )
                })
            })
        break
    case 'Estimer':
        cy.get('[data-e2e="estimate"]')
            .click()
            .then(() => {
                checkGARequest({
                    t: 'event',
                    ul: ['fr', 'fr-fr'],
                    ec: 'navigation',
                    ea: 'click',
                    el: encodeURIComponent('hp::Estimer')
                })
            })
        break
    case 'Simulez votre financement':
        cy.get('#homepage-v2 > .container-profil > a:nth-child(3)')
            .click()
            .then(() => {
                checkGARequest({
                    t: 'event',
                    ul: ['fr', 'fr-fr'],
                    ec: 'partenaires',
                    promoa: 'click',
                    el: encodeURIComponent(
                        'home::cartouche_simulez_votre_financement'
                    )
                })
            })
        break
    case 'Découvrez les locations de vacances':
        cy.get('#homepage-v2 > .container-profil > a:nth-child(4)')
            .click()
            .then(() => {
                checkGARequest({
                    t: 'event',
                    ul: ['fr', 'fr-fr'],
                    ec: 'partenaires',
                    promoa: 'click',
                    el: encodeURIComponent(
                        'home::cartouche_simulez_votre_financement'
                    )
                })
            })
        break
    case 'Voir tous les articles':
        cy.get('[data-e2e-button="page-news"]')
            .click()
            .then(() => {
                checkGARequest({
                    t: 'event',
                    ul: ['fr', 'fr-fr'],
                    ec: 'navigation',
                    ea: 'click'
                    // el: encodeURIComponent('hp::Voir_tous_les_articles'),
                })
            })
        break
    case 'Poser ma question':
        cy.get('[data-e2e="question"]')
            .click()
            .then(() => {
                checkGARequest({
                    t: 'event',
                    ul: ['fr', 'fr-fr'],
                    ec: 'navigation',
                    ea: 'click'
                    // el: encodeURIComponent('hp::Poser_ma_question')
                })
            })
        break
    }
})

Then('I check accompanying tags', (dataTable) => {
    testOnSingleButton(dataTable.rawTable.slice(1))
    function testOnSingleButton(data) {
        const singleData = data[0]
        cy.wait(1000).then(() => {
            const url = singleData[0] // first column of line
            const el = singleData[2] // second column of line
            const query = 'a[data-e2e="accompanying-link"][href="' + url + '"]'

            cy.get(query)
                .click()
                .then(() => {
                    console.log('after click')
                    checkGARequest({
                        t: 'event',
                        ul: ['fr', 'fr-fr'],
                        el: encodeURIComponent(el)
                    })
                    const newData = data.slice(1)
                    console.log(newData)
                    if (newData && newData.length) {
                        cy.visit('/').then(() => {
                            testOnSingleButton(newData)
                        })
                    }
                })
        })
    }
})

Then(
    'I check tag link on prod while tapping on the button Transferer votre contrat d\'energie',
    () => {
        const query =
            'a[data-e2e="accompanying-link"][href="/annonces/edito/services/partenaire/devis-energie"]'
        cy.visit('/')
        cy.get(query)
            .click()
            .then(() => {
                checkGARequest({
                    t: 'event',
                    ul: ['fr', 'fr-fr'],
                    ec: 'partenaires',
                    ea: 'credit_agricole',
                    el: 'home%3A%3Acartouche_simulez_votre_financement'
                })
            })
    }
)

When('I select {string}', (text) => {
    switch (text) {
    case 'Paris':
        cy.get('body').then((body) => {
            if (body.find('._acc_close').length > 0) {
                cy.get('._acc_close').click({ multiple: true, force: true })
            }

            cy.get('[data-e2e="location"]', { timeout: 60000 })
                .first()
                .click()
        })
        break
    }
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
        cy.get('[data-e2e-input="area-min"]')
            .should('have.attr', 'placeholder', surfaceMin)
            .type(amountSurfaceMin)
    }
)
