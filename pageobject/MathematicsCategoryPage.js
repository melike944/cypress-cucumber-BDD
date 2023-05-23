
class MathematicsPage{
   
  

    booksOnSale() {
      
        cy.get("label[for='sales-onsale']").click();



    }
    clickFirstbook(){
      cy.get("img[alt='Mathematical Brain Teasers and Logic Puzzles']").click();
    }
}
export default new MathematicsPage();