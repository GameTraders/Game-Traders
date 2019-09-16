//Blake 1
describe('input user name', function () {
    it('types username into username field', function() {
        cy.visit(`http://localhost:3000`)
        cy.get('.Authentication_Username_Container > input').type('Aceassin')
    })
});
// Blake 2
describe('input user password', function () {
    it('types password into password field', function() {
        cy.get('.Authentication_Password_Container > input').type('yellow')
    })
});
//Blake 4
describe('inputs register fields', function () {
    it('types into username field', function() {
        cy.get('.Authentication_Container21 > input').type('Blake')
    })
    it('types into email field', function() {
        cy.get('.Authentication_Container22 > input').type('Blake@email.com')
    })
    it('types into password field', function() {
        cy.get('.Authentication_Container23 > input').type('password')
    })
    it('types into confirm password field', function() {
        cy.get('.Authentication_Container24 > input').type('password')
    })
    it('types into profile picture field', function() {
        cy.get('.Authentication_Container25 > input').type('http:imgurl.com')
    })
    it('types into street address field', function() {
        cy.get('.Authentication_Container26 > input').type('123 best street')
    })
    it('types into city field', function() {
        cy.get('.Authentication_Container27 > input').type('City')
    })
    it('types into state field', function() {
        cy.get('.Authentication_Container28 > input').type('State')
    })
    it('types into zip field', function() {
        cy.get('.Authentication_Container29 > input').type('zip')
    })
  
});
//Blake 5
describe('Logs user in', function(){
    it('Clicks on Login', function() {
        cy.get('.Authentication_Button').click()
    })
})