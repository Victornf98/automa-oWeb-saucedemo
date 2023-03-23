
it('deve realizar o login', function(){

    cy.viewport(1440, 900)
    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('input[value=Login]').click()
    cy.get('div [class="app_logo"]').should('be.visible')
})

it('deve adicionar o produto ao carrinho de compras', function(){

    cy.viewport(1440, 900)
    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('input[value=Login]').click()
    cy.get('div [class="app_logo"]').should('be.visible')
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').click()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('.shopping_cart_link').click()
    cy.get('#checkout').click()
    cy.get('#first-name').type('André')
    cy.get('#last-name').type('Barbosa')
    cy.get('#postal-code').type('02873-370')
    cy.get('#continue').click()
    cy.contains('.summary_value_label', 'Free Pony Express Delivery!').should('be.visible')
    





})
