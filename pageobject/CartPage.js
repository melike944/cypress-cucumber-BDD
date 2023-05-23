class CartPage {

    validateAddedMessage() {

        cy.get(".UpsellPage-CartTitle").contains("DVD was added to your cart")
    }

    clickViewCartButton() {

        cy.get(".btn.btn-btn.btn-dark").click();

    }

    clickCheckOutNowButton() {
        cy.get("a[elem='CheckoutButton']").click();
    }
    enterFakeAccount(email, password) {

        cy.get("input[name='email']").type(email);
        cy.get("input[name='password']").type(password);

    }

    clickContinueButton() {

        cy.get(".mt-4.btn.btn-dark.btn-block").click();
    }

    validateErrorMessage() {

        cy.get("//small[@id='emailError']").should('be.visible').and("contains","We can't find an account with that email address");
        // cy.get("#emailError").contains("We can't find an account with that email address");
    }
    navigatePreviousPage() {
        
        cy.go('back');
    }

}
export default new CartPage();