import { Then, Before } from 'cypress-cucumber-preprocessor/steps'
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
Given('I tap on the button Paramétrer les cookies', () => {
    cy.openWindow('/')
    cy.get(
        '#footer-ekino > div > ul:nth-child(5) > li:nth-child(4) > button'
    ).click({ force: true })
    cy.get(
        'body > div > div > div > div > footer > section.sc-1cm9hmm-1.kwwSMW > a:nth-child(2)'
    ).click()
})
Then('The pop up appear', () => {
    cy.get('#appconsent', { timeout: 60000 }).should('be.exist')
})
Then('I check tags send on preprod', () => {
    // cy.wait(9000).then(() => {
    checkGARequest({
        tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
        t: ['pageview', 'event'],
        cd1: ['preproduction', 'FigaroImmo', 'home'],
        cd2: ['', 'home', 'preproduction'],
        cd3: ['', 'home', 'homepage'],
        cd4: ['homepage', 'autres', 'preproduction'],
        cd5: ['', 'immobilier.lefigaro'],
        cd6: ['', 'homepage'],
        cd7: ['', 'autres', 'mobile'],
        cd8: [
            '',
            'Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%2010_3_1%20like%20Mac%20OS%20X)%20AppleWebKit%2F603.1.30%20(KHTML%2C%20like%20Gecko)%20Version%2F10.0%20Mobile%2F14E304%20Safari%2F602.1'
        ],
        cd9: ['', 'homepage', 'classique'],
        cd10: ['', 'mobile'],
        cd11: ['', 'classique'],
        cd12: [''],
        cd13: [''],
        cd14: [''],
        cd15: ['-'],
        cd16: ['FigaroImmo'],
        cd17: ['homepage'],
        cd18: ['', 'autres'],
        cd19: [''],
        cd20: ['', 'mobile', 'inconnu'],
        cd21: ['', 'classique'],
        cd22: ['', 'nonConnectee'],
        cd23: ['', 'autres', 'portrait'],
        cd24: [''],
        cd26: ['', 'portrait'],
        cd28: [''],
        cd30: [''],
        cd31: [''],
        cd32: ['', 'nonConnectee', 'inconnu'],
        cd35: ['', 'nonConnectee'],
        cd36: ['', 'portrait'],
        cd38: ['', 'annonce%3A%3Ahome'],
        cd39: [''],
        cd40: [''],
        cd41: [''],
        cd43: ['', '1'],
        cd44: [''],
        cd45: [''],
        cd46: ['']
    })
    // })
})
Then('I check tags send on prod', () => {
    checkGARequest({
        tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
        t: ['pageview', 'event'],
        cd1: ['production', 'FigaroImmo', 'home'],
        cd2: ['', 'home', 'production'],
        cd3: ['', 'home', 'homepage'],
        cd4: ['homepage', 'autres', 'production'],
        cd5: ['', 'immobilier.lefigaro'],
        cd6: ['', 'homepage'],
        cd7: ['', 'autres', 'mobile'],
        cd8: [
            '',
            'Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%2010_3_1%20like%20Mac%20OS%20X)%20AppleWebKit%2F603.1.30%20(KHTML%2C%20like%20Gecko)%20Version%2F10.0%20Mobile%2F14E304%20Safari%2F602.1'
        ],
        cd9: ['', 'homepage', 'classique'],
        cd10: ['', 'mobile'],
        cd11: ['', 'classique'],
        cd12: [''],
        cd13: [''],
        cd14: [''],
        cd15: ['-'],
        cd16: ['FigaroImmo'],
        cd17: ['homepage'],
        cd18: ['', 'autres'],
        cd19: [''],
        cd20: ['', 'mobile', 'inconnu'],
        cd21: ['', 'classique'],
        cd22: ['', 'nonConnectee'],
        cd23: ['', 'autres', 'portrait'],
        cd24: [''],
        cd26: ['', 'portrait'],
        cd28: [''],
        cd30: [''],
        cd31: [''],
        cd32: ['', 'nonConnectee', 'inconnu'],
        cd35: ['', 'nonConnectee'],
        cd36: ['', 'portrait'],
        cd38: ['', 'annonce%3A%3Ahome'],
        cd39: [''],
        cd40: [''],
        cd41: [''],
        cd43: ['', '1'],
        cd44: [''],
        cd45: [''],
        cd46: ['']
    })
})
