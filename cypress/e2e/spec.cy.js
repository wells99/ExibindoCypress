describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://youtube.com');
    cy.wait(3000);
    cy.get('.ytSearchboxComponentInput')
    .click()
    .type("Novo Teste");

    cy.get('.ytSearchboxComponentInput').type('{enter}')

    cy.wait(3000);

    cy.get('.ytSearchboxComponentClearButton > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill')
    .click()
    
    cy.get('.ytSearchboxComponentInput')
    .click()
    .type("Teste Completo");
    cy.wait(3000)
    cy.get('.ytSearchboxComponentSearchButton > yt-icon > .yt-icon-shape > div').click()
  })
})