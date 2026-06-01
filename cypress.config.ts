import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    video: true,
    screenshotOnRunFailure: true,
  },
  component: {
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        optimizeDeps: {
          esbuildOptions: {
            target: 'es2020',
          },
        },
      },
      indexHtmlFile: 'index.html',
    },
    supportFile: 'cypress/support/component.ts',
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
})
