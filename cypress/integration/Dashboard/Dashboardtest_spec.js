//Danny 1
describe('search game', function () {
    it('types game title into search field', function() {
        cy.visit(`http://localhost:3000`)
        cy.get('Dashboard-search-container > input').type('Halo')
    })
})

//Danny 2
describe('logout', function () {
    it('logs user out', function() {
        cy.visit(`http://localhost:3000`)
        cy.get('Dashboard_NavBar > h1').click()
    })
})