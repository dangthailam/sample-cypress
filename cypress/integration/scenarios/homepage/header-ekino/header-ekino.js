import { Then } from 'cypress-cucumber-preprocessor/steps'
Then('I check logo FI', () => {
    cy.get('#fi-header > div > a[data-e2e-header="logo-menu"]').click()
    cy.get('#fi-header > div > a[data-e2e-header="logo-menu"]').should(
        'be.visible'
    )
})
Then('I check url and title of the buttons in the header', (datatable) => {
    datatable.rawTable.forEach((data) => {
        const text = data[0]
        const url = data[1]
        // const title = data[2]
        const checkingTarget = data[3]
        cy.get('[data-e2e-header="sub-menu-link"]')
            .contains(text)
            .invoke('attr', 'href')
            .should('be.equal', url)
        cy.get('[data-e2e-header="sub-menu-link"]')
            .contains(text)
            .invoke('attr', 'target')
            .then((target) => {
                expect(target || '').to.equal(checkingTarget)
            })
    })
})
Then('I tap on the button {string}', (text) => {
    switch (text) {
    case 'Se Connecter':
        cy.get(
            'li.fi-user-rappel [data-e2e-header="button-connect"]'
        ).click()
        cy.url().should(
            'be.equal',
            'https://immobilier.lefigaro.fr/annonces/profil/identification.html'
        )
        cy.get('#email').type('lebichngoc090589@gmail.com')
        cy.get('#password').type('Bich1234!')
        cy.wait(2000)
        cy.get('#loginForm2 > fieldset > div.action-form > button')
            .click()
            .wait(2000)
        break
    case 'Se Déconnecter':
        cy.get('[data-e2e-header="button-logout"]')
            .contains('Se déconnecter')
            .click()
        break
    case 'Mon profil':
        cy.get(
            '#all-menu > li.fi-user-rappel > div > a.perso-link.perso-link-login'
        ).click()
        break
    case 'Open menu':
        cy.get('[data-e2e-header="open-menu"]').click()
        break
    case 'Open menu parent':
        cy.get('[data-e2e-header="open-menu"]').click()
        break
    case 'Actualité & conseils':
        cy.get('#all-menu > li:nth-child(2) > span').click()
        break
    case 'Actualités de l\'immobilier':
        cy.get(
            '#all-menu > li:nth-child(2) > div > div > div:nth-child(2)'
        ).click()
        break
    case 'Tous nos conseils Actu':
        cy.get(
            '#all-menu > li:nth-child(2) > div > div > div:nth-child(3)'
        ).click()
        break
    case 'Louer':
        cy.get('#all-menu > li:nth-child(4) > .first-level-link').click()
        break
    case 'Louer un bien':
        cy.get(
            '#all-menu > li:nth-child(4) > div > div > div:nth-child(2)'
        ).click()
        break
    case 'Tous nos conseils Louer':
        cy.get(
            '#all-menu > li:nth-child(4) > div > div > div:nth-child(3)'
        ).click()
        break
    case 'Vendre':
        cy.get('#all-menu > li:nth-child(5) > span').click()
        break
    case 'Vendre un bien':
        cy.get(
            '#all-menu > li:nth-child(5) > div > div > div:nth-child(2)'
        ).click()
        break
    case 'Tous nos conseils Vendre':
        cy.get(
            '#all-menu > li:nth-child(5) > div > div > div:nth-child(3)'
        ).click()
        break
    case 'Outils Vendre':
        cy.get(
            '#all-menu > li:nth-child(5) > div > div > div:nth-child(4)'
        ).click()
        break
    case 'Acheter':
        cy.get('#all-menu > li:nth-child(6) > span').click()
        break
    case 'Acheter un bien':
        cy.get(
            '#all-menu > li:nth-child(6) > div > div > div:nth-child(2)'
        ).click()
        break
    case 'Tous nos conseils Acheter':
        cy.get(
            '#all-menu > li:nth-child(6) > div > div > div:nth-child(3)'
        ).click()
        break
    case 'Financier':
        cy.get(
            '#all-menu > li:nth-child(6) > div > div > div:nth-child(4)'
        ).click()
        break
    case 'Outils Acheter':
        cy.get(
            '#all-menu > li:nth-child(6) > div > div > div:nth-child(5)'
        ).click()
        break
    }
})
Then('I see the button Mon profil and Se déconnecter', () => {
    cy.get('[data-e2e-header="open-menu"]').click()
    cy.get('[data-e2e-header="button-logout"]').should('be.visible')
    cy.get('[data-e2e-header="button-connect"]').should('be.visible')
})
Then('I go to Mon espace perso', () => {
    cy.url().should(
        'be.equal',
        'https://immobilier.lefigaro.fr/annonces/perso/index.html'
    )
})
Then('I see the button Se Connecter', () => {
    cy.get('[data-e2e-header="button-connect"]').should('be.visible')
})
Then('I check the button {string}', (text) => {
    switch (text) {
    case 'Location Immobilier d\'exception':
        cy.get(
            '#all-menu > li:nth-child(4) > div > div > div:nth-child(2) > div > div > ul > li:nth-child(7) > a'
        )
            .invoke('attr', 'href')
            .should('be.equal', 'https://proprietes.lefigaro.fr/location/')
        break
    case 'Immobilier d\'exception':
        cy.get(
            '#all-menu > li:nth-child(6) > div > div > div:nth-child(2) > div > div > ul > li:nth-child(6) > a'
        )
            .invoke('attr', 'href')
            .should('be.equal', 'https://proprietes.lefigaro.fr/')
        break
    case 'Emménager Louer':
        cy.get(
            '#all-menu > li:nth-child(4) > div > div > div:nth-child(3) > div > div > ul > li:nth-child(5) > a'
        )
            .invoke('attr', 'href')
            .should(
                'be.equal',
                'https://immobilier.lefigaro.fr/annonces/edito/louer/j-emmenage'
            )
        break
    case 'Emménager Acheter':
        cy.get(
            '#all-menu > li:nth-child(6) > div > div > div:nth-child(3) > div > div > ul > li:nth-child(6) > a'
        )
            .invoke('attr', 'href')
            .should(
                'be.equal',
                'https://immobilier.lefigaro.fr/annonces/edito/acheter/j-emmenage'
            )
        break
    }
})
Then('I go to Mon espace perso', () => {
    cy.url().should(
        'be.equal',
        'https://immobilier.lefigaro.fr/annonces/perso/index.html'
    )
})
