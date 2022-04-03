describe('CSP', () => {
    it('CSP ', () => {
        cy.server()
        cy.route('GET', '/').as('page')
        cy.wait('page').should('have.property', 'status', 200)
        cy.get('@page') // yields the same XHR object
            .its('response.headers') // alternative: its('request.body')
            .should('deep.equal', {
                id: '101',
                firstName: 'Joe',
                lastName: 'Black'
            })
    })
})
