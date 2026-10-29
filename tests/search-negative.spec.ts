import { expect, test } from '../fixtures/WikipediaFixtures'

test.describe('Wikipédia - pesquisas inválidas', () => {
  test('informa quando o termo não possui resultados', async ({
    locators,
    navegacao,
    page,
    pesquisa,
  }) => {
    await navegacao.acessarPaginaInicial()
    await pesquisa.pesquisarPor('zzzxptoresultadoinexistente987654321')

    await expect(page).toHaveURL(/search=/)
    await expect(locators.mensagemSemResultados).toBeVisible()
    await expect(locators.listaResultados).toHaveCount(0)
  })

  test('não envia a pesquisa sem termo', async ({ locators, navegacao, page }) => {
    await navegacao.acessarPaginaInicial()
    const paginaInicial = page.url()

    await locators.campoPesquisa.click()
    await locators.campoPesquisa.press('Enter')

    await expect(page).toHaveURL(paginaInicial)
    await expect(locators.campoPesquisa).toBeFocused()
  })
})
