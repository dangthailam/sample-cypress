import { Then, When } from 'cypress-cucumber-preprocessor/steps'
When('I select {string}', () => {
    cy.get('body').then((body) => {
        if (body.find('._acc_close').length > 0) {
            cy.get('._acc_close').click({ multiple: true, force: true })
        }

        cy.get('.suggestions-item [data-e2e="location"]').first().click()
    })
})
When('I search {string}', (text) => {
    const encoded = encodeURIComponent(text.trim()).replace(/'/g, '%27')
    cy.intercept('**/locations?q=' + encoded).as('typing' + encoded)
    cy.get('[data-e2e-input="search-pl"]').first().click()
    cy.get('[data-e2e-input="search"]').type(text)
    if (text.trim()) {
        cy.wait('@typing' + encoded, { timeout: 60000 })
    }
})
When('I search next {string}', (text) => {
    cy.get('[data-e2e-input="search"]').type(text)
})
When('I delete {string} in the location', () => {
    cy.get('[data-e2e-input="search-pl"]').first().click()
    cy.get('[data-e2e-input="search-location-close"]').click()
})
When('I tap on the button Recherche without waiting', () => {
    cy.get('[data-e2e="search"]').click()
})
When('I tap on the button {string}', (text) => {
    cy.get('body').then((body) => {
        if (body.find('._acc_close').length > 0) {
            cy.get('._acc_close').click({ multiple: true, force: true })
        }
        switch (text) {
        case 'Recherche':
            cy.get('[data-e2e="search"]').click()
            break
        case 'Valider recherche':
            cy.get('[data-e2e="search-validate"]').click()
            break
        case 'Type de bien':
            cy.get(
                '[data-e2e="search-typelocation"] .dropdown-button-text'
            ).click()
            cy.scrollTo(0, 0)
            break
        case 'Maison':
            cy.get(
                '.estatetype-root .estatetype-category.cat-maison .estatetype-category-checkbox'
            ).click()
            break
        case 'Type Maison':
            cy.get(
                '[data-e2e="search-typelocation"] .dropdown-button-text > span'
            ).click()
            break
        case 'Appartement':
            cy.get(
                '.estatetype-root .estatetype-category.cat-appartement .estatetype-category-checkbox'
            ).click()
            break
        case 'Type Maison, Appartement':
            cy.get(
                '[data-e2e="search-typelocation"] .dropdown-button-text > span'
            ).click()
            break
        case 'Budget':
            cy.get(
                '[data-e2e="search-budget"] >.dropdown-button__label'
            ).click()
            cy.scrollTo(0, 0)
            break
        case 'Valider budget':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="search-validate"]'
            ).click()
            break
        case '+ de critères':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="search-criteria"] >.dropdown-button__label .dropdown-button-text'
            ).click()
            cy.wait(250)
            cy.scrollTo(0, 0)
            break
        case 'Louer':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="search-criteria-rent"]'
            ).click()
            break
        case 'Acheter':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="search-criteria-buy"]'
            ).click()
            break
        case 'Ancien':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="figimmo"]'
            ).click()
            break
        case 'Parking':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="parking"]'
            ).click()
            break
        case 'Ascenseur':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="ascenseur"]'
            ).click()
            break
        case 'Réinitialiser':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="search-criteria-reset"]'
            ).click()
            break
        case 'Valider +de critère':
            cy.intercept('**/classifieds-with-size?*').as('searching')
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="search-validate"]'
            ).click()
            cy.wait('@searching', { timeout: 60000 })
            cy.wait(1000)
            break
        case 'Valider type de bien':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="search-validate"]'
            ).click()
            break
        case 'Créer une alerte':
            cy.get('[data-e2e="create-alert"]').click()
            break
        case 'Valide créer une alerte':
            cy.intercept('POST', '**/rest/alert').as('sendAlert')
            cy.get(
                '[data-e2e="create-alert-content"] [data-e2e="submit-alert"]'
            ).click()
            cy.wait('@sendAlert', { timeout: 60000 })
            break
        case 'Contacter':
            cy.get(
                '[data-e2e="bloc-list-item"]:nth-of-type(3)'
            ).scrollIntoView()
            cy.get(
                '[data-e2e="bloc-list-item"]:nth-of-type(3) button.btn-to-contact'
            ).click()
            break
        case 'Envoyer mon message':
            cy.intercep('POST', '**/rest/alert').as('sendAlert')
            cy.get('[data-e2e="annonce-send-message"]').click()
            cy.wait('@sendAlert', { timeout: 60000 })
            break
        case 'Fermer':
            cy.get('[data-e2e="contact-close"]').click()
            break
        case 'Page 2':
            cy.get('[data-e2e="changepage"] li:nth-child(2)').click()
            break
        case 'Neuf':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="search-criteria-projet"] [data-e2e="figimmoneuf"] label',
                {
                    timeout: 10000
                }
            ).click()
            break
        case 'Propriétés':
            cy.get(
                '[data-e2e="search-criteria-list"] [data-e2e="search-criteria-projet"] [data-e2e="Propriétés de prestige"] label'
            ).click()
            break
        case 'Je souhaite':
            cy.get(
                '[data-e2e="create-alert-content"] [data-e2e="alert-checkbox"]'
            ).click()
            cy.get(
                '[data-e2e="create-alert-content"] [data-e2e="alert-phone"]'
            ).type('0678909878')
            break
        case 'J\'accepte':
            cy.get(
                '[data-e2e="create-alert-content"][data-e2e="contact-checkbox"]'
            ).click()
            break
        }
    })
})
Then('I see type {string}', (text) => {
    switch (text) {
    case 'Maison':
        cy.get(
            '[data-e2e="search-typelocation"] .dropdown-button-text > span'
        ).contains(text)
        break
    case 'Maison, Appartement':
        cy.get(
            '[data-e2e="search-typelocation"] .dropdown-button-text > span'
        ).contains(text)
        break
    }
})
When(
    'I search Budget {string} with {string}, {string} with {string}',
    (budgetMin, amountBudgetMin, budgetMax, amountBudgetMax) => {
        cy.get('[data-e2e-input="budget-min"]')
            .should('have.attr', 'placeholder', budgetMin)
            .type(amountBudgetMin)
        cy.get('[data-e2e-input="budget-max"]')
            .should('have.attr', 'placeholder', budgetMax)
            .type(amountBudgetMax)
    }
)
Then('I see Etat', () => {
    cy.get('[data-e2e="search-criteria-rent"]').should('be.exist')
})
Then('I see the pop up {string}', (text) => {
    switch (text) {
    case 'Créer une alerte':
        cy.get('[data-e2e="create-alert-content"]').should('be.exist')
        break
    case 'Contacter':
        cy.get('[data-e2e="create-alert-content"]').should('be.visible')
        break
    }
})
When('I search alert email address {string}', (text) => {
    cy.get('[data-e2e="create-alert-content"] [data-e2e="alert-email"]').type(
        text
    )
})
When('I search contact email address {string}', (text) => {
    cy.get('[data-e2e="create-alert-content"] [data-e2e="contact-email"]').type(
        text
    )
})
Then('I see the message {string}', (message) => {
    switch (message) {
    case 'Votre alerte a bien été créée':
        cy.get('[data-e2e="message-alert-success"]').contains(message)
        break
    case 'Votre demande d\'information a bien été envoyée':
        cy.get('[data-e2e="message-di-success"]').should('be.visible')
        break
    case 'Le champ "Nom" est obligatoire':
        cy.get('[data-e2e="warning"]').should('be.visible')
        break
    }
})
When('I search phone number {string}', (phoneNumber) => {
    cy.get('[data-e2e="contact-phone"]').type(phoneNumber)
})
When('I search name {string}', (name) => {
    cy.get('[data-e2e="contact-name"]').type(name)
})
Then('I see {string}', (text) => {
    switch (text) {
    case 'De 20 000 € à 500 000 €':
        cy.get(
            '[data-e2e="search-budget"] span.dropdown-button-text span'
        ).contains(text)
        break
    }
})
When('I scroll at the end of the page', () => {
    cy.get('[data-e2e="changepage"] li:nth-child(2)').scrollIntoView({
        duration: 100
    })
    // check if alert exist then click on close button
    cy.get('body').then(($body) => {
        if ($body.find('[data-e2e="contact-close"]').length) {
            cy.get('[data-e2e="contact-close"]').click()
        }
        cy.get('[data-e2e="changepage"] li:nth-child(2)').should('be.visible')
    })
})
Then('I see cartouche FI9', () => {
    cy.get('[data-e2e="cartouche-FI9"]').should('be.visible')
})
Then('I see url FI9', () => {
    const fi9Url = 'https://www.explorimmoneuf.com/programme/detail-'
    cy.get('[data-e2e="cartouche-FI9"]', { timeout: 60000 }).then(() => {
        cy.get(
            '[data-e2e="bloc-list-item"]:first-child > div.list-item-details > div.list-item-details__header > a'
        ).then(($a) => {
            // pull off the fully qualified href from the <a>
            const url = $a.prop('href')
            console.log(url)
            console.log(fi9Url)
            expect(url.startsWith(fi9Url), url + ' starts with ' + fi9Url).to.be
                .true
            cy.request(url).then((response) => {
                const body = response.body
                const title = body.substring(
                    body.indexOf('<title>') + '<title>'.length,
                    body.indexOf('</title>')
                )
                expect(title).to.contains('Programme immobilier neuf Marseille')
            })
        })
    })
})
Then('I see cartouche Pro', () => {
    cy.get('[data-e2e="cartouche-PLF"]').should('be.visible')
})
Then('I see url Pro', () => {
    cy.get('[data-e2e="cartouche-PLF"]', { timeout: 60000 }).then(() => {
        cy.get(
            '[data-e2e="bloc-list-item"]:first-child > div.list-item-details > div.list-item-details__header > a'
        ).then(($a) => {
            // pull off the fully qualified href from the <a>
            const url = $a.prop('href')
            cy.request(url).then((response) => {
                const body = response.body
                const title = body.substring(
                    body.indexOf('<title>') + '<title>'.length,
                    body.indexOf('</title>')
                )
                expect(title).to.contains('Nice')
            })
        })
    })
})
Then('I see url {string}', (url) => {
    cy.url().should('include', url)
})
Then('I see {string} in the location', (text) => {
    cy.get('[data-e2e-input="search-pl"] > span').contains(text)
})
Then('I see the list items', () => {
    cy.get('[data-e2e="bloc-list-item"]').should('be.visible')
})
