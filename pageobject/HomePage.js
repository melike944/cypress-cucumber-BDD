class HomePage {
    visit() {
        cy.visit('https://www.thegreatcourses.com/');
        cy.wait(1000);
    }
    clickBrowserMenu() {
        cy.xpath('//button[contains(@class,"Header-Menu Header-Menu_type_menu")]').click();
        //cy.get('.Header-Menu.Header-Menu_type_menu');
    }

    clickMathematicsCategory() {
        // cy.get('.MenuOverlay-ItemList').within(() => {
        //     cy.contains('mathematics').click(); // Clicks the menu option with the text "Menu Option 1"
        //   });
        cy.xpath('(//span[contains(@class,"mathematics")])[1]').click();
        //cy.contains('li','mathematics').click();
    }





}

export default new HomePage();