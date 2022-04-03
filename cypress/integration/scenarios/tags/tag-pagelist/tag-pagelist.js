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
Then('I check tags send on preprod', () => {
    checkGARequest({
        tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
        t: ['pageview', 'event'],
        cd1: ['FigaroImmo', 'preproduction'],
        cd2: ['liste_annonces', 'preproduction'],
        cd3: ['annonces', 'search'],
        cd4: ['liste_annonce', 'liste_annonces'],
        cd5: ['vente'],
        cd6: ['', 'liste_annonces', 'liste_annonce'],
        cd7: ['', 'autres', 'mobile'],
        cd8: [
            '',
            'Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%2010_3_1%20like%20Mac%20OS%20X)%20AppleWebKit%2F603.1.30%20(KHTML%2C%20like%20Gecko)%20Version%2F10.0%20Mobile%2F14E304%20Safari%2F602.1'
        ],
        cd9: ['', 'classique'],
        cd10: ['', 'mobile'],
        cd11: ['', 'classique'],
        cd12: [''],
        cd13: [''],
        cd14: [''],
        cd15: ['-'],
        cd16: ['FigaroImmo'],
        cd17: ['search'],
        cd18: ['', 'liste_annonces'],
        cd19: [''],
        cd20: ['mobile', 'inconnu'],
        cd21: ['classique'],
        cd22: ['', 'nonConnectee'],
        cd23: ['portrait'],
        cd24: [''],
        cd30: [''],
        cd31: [''],
        cd32: ['inconnu'],
        cd35: ['nonConnectee'],
        cd36: ['portrait'],
        cd38: ['annonce%3A%3Aliste%3A%3Amoteur_avance'],
        cd39: [''],
        cd40: [''],
        cd41: [''],
        cd43: ['', '1'],
        cd44: [''],
        cd46: ['']
    })
})
Then('I check tags send on prod', () => {
    checkGARequest({
        tid: ['UA-23551486-1', 'UA-101739686-1', 'UA-716671-1'],
        t: ['pageview', 'event'],
        cd1: ['FigaroImmo', 'production'],
        cd2: ['liste_annonces', 'production'],
        cd3: ['annonces', 'search'],
        cd4: ['liste_annonce', 'liste_annonces'],
        cd5: ['vente'],
        cd6: ['', 'liste_annonces', 'liste_annonce'],
        cd7: ['', 'autres', 'mobile'],
        cd8: [
            '',
            'Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%2010_3_1%20like%20Mac%20OS%20X)%20AppleWebKit%2F603.1.30%20(KHTML%2C%20like%20Gecko)%20Version%2F10.0%20Mobile%2F14E304%20Safari%2F602.1'
        ],
        cd9: ['', 'classique'],
        cd10: ['', 'mobile'],
        cd11: ['', 'classique'],
        cd12: [''],
        cd13: [''],
        cd14: [''],
        cd15: ['-'],
        cd16: ['FigaroImmo'],
        cd17: ['search'],
        cd18: ['', 'liste_annonces'],
        cd19: [''],
        cd20: ['mobile', 'inconnu'],
        cd21: ['classique'],
        cd22: ['', 'nonConnectee'],
        cd23: ['portrait'],
        cd24: [''],
        cd30: [''],
        cd31: [''],
        cd32: ['inconnu'],
        cd35: ['nonConnectee'],
        cd36: ['portrait'],
        cd38: ['annonce%3A%3Aliste%3A%3Amoteur_avance'],
        cd39: [''],
        cd40: [''],
        cd41: [''],
        cd43: ['', '1'],
        cd44: [''],
        cd46: ['']
    })
})
