import { OnboardingService } from '../../src/app/onboarding/services/onboarding.service'

describe('OnboardingService', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should return user data when valid CPF is provided', () => {
    const cpf = '100.466.269-64';
    const service = new OnboardingService()
    cy.get('#cpf-input').type(cpf);
    cy.get('#submit-button').click();
    cy.wrap(service.getUserData(cpf)).should('be.an', 'object').
      and('have.keys', ['name', 'cpf', 'cpfSituation', 'accounts'])
      .and('contain', {
        cpf: cpf,
        cpfSituation: true,
        name: "Luiz Otávio Goebel Brey",
      })
  });

  it('should return not found user data when a cpf is valid but is not the user cpf', () => {
    const cpf = '817.735.230-07';
    const service = new OnboardingService()
    cy.get('#cpf-input').type(cpf);
    cy.get('#submit-button').click();
    cy.wrap(service.getUserData(cpf)).should('be.an', 'object').
      and('have.keys', ['name', 'cpf', 'cpfSituation', 'accounts'])
      .and('contain', {
        cpf: cpf,
        cpfSituation: false,
        name: "Não encontrado",
      })
  });

  it('should show error messasge when a incorret cpf is provided', () => {
    const cpf = '111.111.111-11';
    cy.get('#cpf-input').type(cpf);
    cy.get('#cpf-input').blur();
    cy.get('#cpfErrorMessage').should('be.visible')
  });
});

