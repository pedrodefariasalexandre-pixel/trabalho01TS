import { expect, test } from '../fixtures/WikipediaFixtures'

test.describe('Wikipédia - navegação', () => {
  test('percorre as principais áreas do site', async ({
    locators,
    navegacao,
    page,
  }) => {
    await navegacao.acessarPaginaInicial()

    await navegacao.acessarConteudoDestacado()
    await expect(page).toHaveURL(/Wikip%C3%A9dia:Conte%C3%BAdo_destacado/)
    await expect(locators.tituloArtigo).toHaveText('Conteúdo destacado')

    await navegacao.voltarParaPaginaInicial()
    await navegacao.acessarEventosAtuais()
    await expect(page).toHaveURL(/Portal:Eventos_atuais/)
    await expect(locators.tituloArtigo).toHaveText('Eventos atuais')

    await navegacao.voltarParaPaginaInicial()
    await navegacao.acessarPortais()
    await expect(page).toHaveURL(/Portal:Conte%C3%BAdo/)
    await expect(locators.tituloArtigo).toHaveText('Portal:Conteúdo')
  })
})
