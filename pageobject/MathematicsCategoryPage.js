
class MathematicsPage{

 
   
  

    booksOnSale() {
      
        cy.get("label[for='sales-onsale']").click();
        //cy.get('label').contains('sales-onsale');



    }
    clickFirstbook(){
      cy.get("img[alt='Mathematical Brain Teasers and Logic Puzzles']").click();
      //cy.contains('Mathematical Brain Teasers and Logic Puzzles').click();
    }
}
export default new MathematicsPage();