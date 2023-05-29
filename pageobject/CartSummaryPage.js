class CartSummaryPage{

validateMsWithBookName(){
   
    cy.get(".CartItem-Heading.mb-1").contains("Mathematical Brain Teasers and Logic Puzzles");
}

clickRemoveButton(){
    cy.get("[name='RemoveItem']").click();
    
}

moveMouseOnCartIcon(){
    cy.get(".Header-MinicartButton").trigger('mouseover');
}
validateEmpityMessage(){
   
   
    cy.get('.CartOverlay-Empty').should('be.visible').and('contain', 'Your Cart is Empty');

}

}
export default new CartSummaryPage();