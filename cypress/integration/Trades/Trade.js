//Rob 4
describe('click to initiate trade', function(){
    it('input username into username field', function(){
        cy.visit('http://localhost:3000')
        cy.get('.Authentication_Username_Container > input').type('greg')
    })
    it('input password into password field', function() {
        cy.get('.Authentication_Password_Container > input').type('password')
    })
    it('click login button for authentication', function() {
        cy.get('.Authentication_Button',).click()
    })
    it('click on user profile picture', function(){
        cy.wait(2000)
        cy.get('.user-pic').click()
    })
    it('click on game', function(){
        cy.wait(2000)
        cy.get('.home-mini-display > img').first().click()
    })
})

//Rob 5
describe('click to logout', function(){
    it('click on logout icon', function(){
        cy.wait(2000)
        cy.get('.jGTCKn').first().click()
    })
})