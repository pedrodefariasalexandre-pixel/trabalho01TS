import { expect, test } from '../fixtures/WikipediaFixtures'

test.describe('Wikipédia - pesquisa', () => {
  test('pesquisa um artigo e valida o resultado', async ({
    locators,
    navegacao,
    page,
    pesquisa,
  }) => {
    await navegacao.acessarPaginaInicial()
    await pesquisa.pesquisarPor('Brasil')

    await expect(page).toHaveURL(
      /^https:\/\/pt\.wikipedia\.org\/wiki\/Brasil(?:$|[?#])/,
    )
    await expect(locators.tituloArtigo).toBeVisible()
    await expect(locators.tituloArtigo).toHaveText('Brasil')
  })
})
