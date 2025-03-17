import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    //baseUrl: 'https://front.serverest.dev',
    // (As URL's de front e back estão definidas de forma individual em support/functions.js)
    supportFile: false,
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
