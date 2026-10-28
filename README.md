# Trabalho 01 — Automação de Testes Web

Projeto acadêmico de automação da Wikipédia em português usando Playwright e TypeScript.

## Escopo inicial

- Abrir a página inicial da Wikipédia em português.
- Validar que o campo principal de pesquisa está visível e habilitado.
- Pesquisar um artigo com `Enter` e validar a URL e o título carregado.
- Usar somente leitura, pesquisa e navegação, sem login ou edição de conteúdo.

## Requisitos

- Node.js 20 ou superior.
- Chromium instalado pelo Playwright.

## Instalação

```bash
npm ci
npx playwright install chromium
```

## Verificações

```bash
npm run typecheck
npm run test:list
npm test
```

## Estrutura

- `locators/`: mapeamento dos elementos da página.
- `actions/`: ações de navegação e de negócio.
- `fixtures/`: disponibilização das classes aos testes.
- `tests/`: cenários e validações.
- `utils/`: constantes e utilitários reutilizáveis.

O autocomplete não faz parte do caminho obrigatório porque as sugestões da Wikipédia podem sofrer limitação de requisições. O fluxo principal de pesquisa será feito com `Enter` e validará o resultado carregado.
