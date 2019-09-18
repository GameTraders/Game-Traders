//Rob 1
describe('username and password login', function() {
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
})

//Rob 2
 describe('navigate to user profile', function() {
     it('click on user profile picture', function(){
         cy.wait(5000)
         cy.get('.user-pic').click()
     })
 })

 //Rob 3
describe('click to add points', function(){
    it('click on points button', function(){
        cy.wait(2000)
        cy.get('.add-points-btn').click()
        cy.get('.stripe > input').type('20')
        cy.get('.stripe > button').click()
    })
})


