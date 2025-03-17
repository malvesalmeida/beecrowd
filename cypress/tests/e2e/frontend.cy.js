describe('UI Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Cadastrar um email inválido', () => {
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]')
      .type('testeM4')
      .get('[data-testid="email"]')
      .type('teste@testecom')
      .get('[data-testid="password"]')
      .type('123')
      .get('[data-testid="cadastrar"]')
      .click();
    cy.get('span').should('include.text', 'Email deve ser um email válido');
  });

  it('Logar com email vazio', () => {
    cy.get('[data-testid="senha"]').type('123');
    cy.get('[data-testid="entrar"]').click();
    cy.get('span').should('include.text', 'Email é obrigatório');
  });

  it('Logar com a senha vazia', () => {
    cy.get('[data-testid="email"]').type('teste@teste.com');
    cy.get('[data-testid="entrar"]').click();
    cy.get('span').should('include.text', 'Password é obrigatório');
  });
});
