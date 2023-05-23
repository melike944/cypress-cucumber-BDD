class SelectedBooksPage {

    clickDVDOption() {
       
        cy.get("label[for='course-format-dvd-PD9076']").click();
       // cy.wait(2000);

    }

    clickAddToCartOption(){
      
        cy.get(".btn-block.btn.btn-success.btn-lg").click();
    }

  

}
export default new SelectedBooksPage();