# Trabalho 01 — Automação de Testes Web

Projeto acadêmico de automação da Wikipédia em português usando Playwright e TypeScript.

## Cenários automatizados

- Validação do campo principal de pesquisa.
- Caminho feliz de navegação pelas áreas principais do site.
- Pesquisa direta de um artigo com validação da URL e do título.
- Pesquisa com lista de resultados e abertura de um artigo.
- Pesquisa sem resultados.
- Tentativa de pesquisa sem termo.
- Pesquisa avançada nos espaços Wikipédia e Ajuda.

Os cenários possuem 22 interações com elementos da página, incluindo cliques, preenchimento de campos, envio pelo teclado, marcação de opções, desmarcação de opções, pesquisa, navegação e validação de resultados.

O projeto utiliza somente leitura, pesquisa e navegação. Nenhum teste realiza login, edição de conteúdo ou outra ação com consequência externa.

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
npm test
```

Para acompanhar a execução no navegador:

```bash
npx playwright test --headed
```

O workflow em `.github/workflows/playwright.yml` executa os testes e publica o relatório HTML como artefato.

## Estrutura

- `locators/`: mapeamento dos elementos da página.
- `actions/`: ações de navegação e de negócio.
- `fixtures/`: disponibilização das classes aos testes.
- `tests/`: cenários e validações.
- `utils/`: constantes e utilitários reutilizáveis.
