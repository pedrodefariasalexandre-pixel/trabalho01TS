import { expect, test } from '../fixtures/WikipediaFixtures'

test.describe('Wikipédia - resultados da pesquisa', () => {
  test('exibe uma lista e abre o primeiro resultado', async ({
    locators,
    navegacao,
    page,
    pesquisa,
  }) => {
    await navegacao.acessarPaginaInicial()
    await pesquisa.pesquisarPor('automação de testes de software')

    await expect(page).toHaveURL(/search=/)
    await expect(locators.listaResultados).toBeVisible()
    await expect(locators.primeiroResultado).toBeVisible()

    await pesquisa.abrirPrimeiroResultado()

    await expect(page).toHaveURL(/\/wiki\//)
    await expect(locators.tituloArtigo).toBeVisible()
  })
})
