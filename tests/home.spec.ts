import { expect, test } from '../fixtures/WikipediaFixtures'

test.describe('Wikipédia - página inicial', () => {
  test('exibe um único campo principal de pesquisa', async ({ locators, navegacao }) => {
    await navegacao.acessarPaginaInicial()

    await expect(locators.buscaPrincipal).toHaveCount(1)
    await expect(locators.campoPesquisa).toHaveCount(1)
    await expect(locators.campoPesquisa).toBeVisible()
    await expect(locators.campoPesquisa).toBeEnabled()
  })
})
