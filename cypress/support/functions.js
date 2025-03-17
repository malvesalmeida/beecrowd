export function envirommentUi() {
  const environments = {
    envui: 'https://front.serverest.dev/',
  };
  const currentEnv1 = 'envui';
  const uiUrl = environments[currentEnv1];
  cy.visit(uiUrl);
}

export function envirommentApi() {
  const environments = {
    envapi: ' https://serverest.dev/',
  };

  const currentEnv2 = 'envui';
  const apiUrl = environments[currentEnv2];
  cy.visit(apiUrl);
}
