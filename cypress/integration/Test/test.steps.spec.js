import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import HomePage from '../../../pageobject/HomePage'
import MathematicsCategory from '../../../pageobject/MathematicsCategoryPage';
import SelectedBooksPage from '../../../pageobject/SelectedBooksPage';
import CartPage from '../../../pageobject/CartPage';
import CartSummaryPage from '../../../pageobject/CartSummaryPage';




Given('User is at the home page', () => {

    HomePage.visit();

})
When('I click on the Browse button', () => {

    HomePage.clickBrowserMenu();
})
And('I click on the Mathematics category', () => {

    HomePage.clickMathematicsCategory();

})

Then('I locate the books on sale', () => {

    MathematicsCategory.booksOnSale();



})

And('I click on the first book on sale', () => {

    MathematicsCategory.clickFirstbook();

})


And('I click on the DVD option', () => {

    SelectedBooksPage.clickDVDOption();


})
// Then('I intercept the request to the "https://store.thegreatcourses.com/graphql/mutation/saveCartItem" API (clicking add to cart button in the next step will trigger this API call, you will start listening before clicking', () => {

// })
And('I click on the Add to Cart button', () => {

    SelectedBooksPage.clickAddToCartOption();

})

Then('I wait for the API intercept call and print the grand_total when the response is received', () => {


})

Then('I validate the text "Instant video added to your cart" appears on the page', () => {

    CartPage.validateAddedMessage()
})
And('I click on the View Cart button', () => {

    CartPage.clickViewCartButton();
})

Then('I validate the book is in the cart by its name', () => {

    CartSummaryPage.validateMsWithBookName();
})
And('I click on the Checkout Now button', () => {

    CartPage.clickCheckOutNowButton();

})

When('I enter a fake email address and fake password', () => {

    CartPage.enterFakeAccount("user2023@gmail.com", "12345");



})

And('I click on the Continue button', () => {

    CartPage.clickContinueButton();

})


Then(' I validate the error message "We can\'t find an account with that email address" appears', () => {

    CartPage.validateErrorMessage();


})
Given('I navigate back to the previous page', () => {

    CartPage.navigatePreviousPage();



})
When('I click on the Remove button to remove the book from the cart', () => {

    CartSummaryPage.clickRemoveButton()
})

And('I move the mouse to the Cart icon in the top right corner', () => {

    CartSummaryPage.moveMouseOnCartIcon();
})

Then('I validate the text "Your Cart is Empty" appears right under the Cart icon', () => {

    CartSummaryPage.validateEmpityMessage9()


})




























// Given('User is at the login page', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/')
// })

// When('User enters username as {string} and password as {string}', (username, password) => {
//     cy.get('input[name="username"]').type(username,"Admin")
//     cy.get('input[name="password"]').type(password,"admin123")
// })

// And('User clicks on login button', () => {
//     cy.get('button[type="submit"]').click()
// })

// // Then('User is able to successfully login to the Website', () => {
// //     cy.get('#welcome').should('be.visible', {timeout: 10000})
// // })