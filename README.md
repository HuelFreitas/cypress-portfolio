# Cypress QA Portfolio

Portfólio de automação de testes E2E e API com Cypress + TypeScript.

## Objetivo
Demonstrar abordagem de QA para cenários críticos com foco em:
- Confiabilidade de execução
- Clareza de cobertura
- Reprodutibilidade local e em CI

## Alvos de teste
- Login Web: `https://the-internet.herokuapp.com/login`
- E-commerce/Cart: `https://demowebshop.tricentis.com/`
- API Smoke: `https://jsonplaceholder.typicode.com/`

## Arquitetura de automação
- **Specs E2E**: concentram cenários e asserts de negócio
- **Page Objects**: encapsulam interações de UI por contexto de tela
  - `cypress/pages/LoginPage.ts`
  - `cypress/pages/BooksPage.ts`
- **Custom Commands**: abstraem fluxos repetitivos para reduzir duplicação
  - `cy.loginTheInternet(username, password)`
  - `cy.addFirstBookToCart()`
- **BDD/Gherkin**: cenários legíveis em `cypress/e2e/features/*.feature` com steps em `cypress/e2e/step_definitions/`

## Cenários implementados
- `cypress/e2e/features/login.feature`
  - login com credenciais válidas
  - login com credenciais inválidas
- `cypress/e2e/features/checkout.feature`
  - adição do primeiro livro ao carrinho
- `cypress/e2e/api.cy.ts`
  - status code
  - validação de contrato básico da resposta
- `cypress/component/primary-button.cy.tsx`
  - renderização e interação de componente

## Pré-requisitos
- Node.js 20+
- npm

## Execução
Instalar dependências:
```bash
npm install
```

Abrir Cypress (modo interativo E2E):
```bash
npm run cy:open
```

Rodar suíte E2E (headless):
```bash
npm run cy:run
```

Rodar Component Testing (UI):
```bash
npm run cy:open:ct
```

Rodar Component Testing (headless):
```bash
npm run cy:run:ct
```

Rodar um spec específico:
```bash
npx cypress run --spec cypress/e2e/api.cy.ts
```

Rodar um cenário BDD específico:
```bash
npx cypress run --spec cypress/e2e/features/login.feature
```

## CI
Workflow: `.github/workflows/cypress.yml`.
A suíte é executada em `push` e `pull_request`, com jobs separados para E2E e Component Testing.

## Scripts de CI
- `npm run ci:e2e`: executa E2E em Chrome (headless)
- `npm run ci:ct`: executa Component Testing em Chrome (headless)
- `npm run cy:verify`: valida instalação/binário do Cypress
