class SelectedBooksPage {

    clickDVDOption() {

        cy.get("label[for='course-format-dvd-PD9076']").click();
        // cy.wait(2000);
        //cy.contains('.custom-control custom-radio','DVD').click();
    }

    clickAddToCartOption() {

        cy.get(".btn-block.btn.btn-success.btn-lg").click();
        
    }



}
export default new SelectedBooksPage();