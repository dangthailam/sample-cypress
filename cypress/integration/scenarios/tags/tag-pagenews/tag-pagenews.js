import { Then, Before, When } from 'cypress-cucumber-preprocessor/steps'
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
Then('I check tags on preprod when the page appear', () => {
    cy.then(() => {
        checkGARequest({
            tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
            t: ['pageview', 'event'],
            cd1: ['sommaire', 'FigaroImmo', 'preproduction'],
            cd2: ['sommaire', 'actualites', 'preproduction'],
            cd3: ['', 'actualite_chaud', 'edito'],
            cd4: ['actualite_immo_chaud', 'autres', 'production'],
            cd20: ['', 'mobile', 'inconnu'],
            cd38: ['sommaire', 'annonce%3A%3Ahome']
        })
    })
})
When('I click on the article on preprod then I check the tags', () => {
    cy.get(
        'section[data-e2e="list-news"] div.item-all-news:first-child'
    ).click()
    cy.then(() => {
        checkGARequest({
            tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
            t: ['pageview', 'event'],
            cd1: ['sommaire', 'FigaroImmo', 'preproduction'],
            cd2: ['sommaire', 'actualites', 'preproduction'],
            cd3: ['', 'actualite_chaud', 'edito'],
            cd4: ['actualite_immo_chaud', 'autres', 'preproduction'],
            cd20: ['', 'mobile', 'inconnu'],
            cd38: ['sommaire', 'annonce%3A%3Ahome']
        })
    })
})

Then('I check tags on prod when the page appear', () => {
    cy.then(() => {
        checkGARequest({
            tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
            t: ['pageview', 'event'],
            cd1: ['sommaire', 'FigaroImmo', 'production'],
            cd2: ['sommaire', 'actualites', 'production'],
            cd3: ['', 'actualite_chaud', 'edito'],
            cd4: ['actualite_immo_chaud', 'autres', 'production'],
            cd20: ['', 'mobile', 'inconnu'],
            cd38: ['sommaire', 'annonce%3A%3Ahome']
        })
    })
})
When('I click on the article on prod then I check the tags', () => {
    cy.get(
        'section[data-e2e="list-news"] div.item-all-news:first-child'
    ).click()
    cy.then(() => {
        checkGARequest({
            tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
            t: ['pageview', 'event'],
            cd1: ['sommaire', 'FigaroImmo', 'production'],
            cd2: ['sommaire', 'actualites', 'production'],
            cd3: ['', 'actualite_chaud', 'edito'],
            cd4: ['actualite_immo_chaud', 'autres', 'production'],
            cd20: ['', 'mobile', 'inconnu'],
            cd38: ['sommaire', 'annonce%3A%3Ahome']
        })
    })
})
