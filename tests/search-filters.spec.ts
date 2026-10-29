import { expect, test } from '../fixtures/WikipediaFixtures'

test.describe('Wikipédia - filtros da pesquisa', () => {
  test('pesquisa nos espaços Wikipédia e Ajuda', async ({
    locators,
    navegacao,
    page,
    pesquisa,
  }) => {
    await navegacao.acessarPaginaInicial()
    await pesquisa.pesquisarPor('editar páginas na Wikipédia')
    await pesquisa.abrirPesquisaAvancada()

    await expect(locators.filtroArtigos).toBeChecked()
    await expect(locators.filtroWikipedia).not.toBeChecked()
    await expect(locators.filtroAjuda).not.toBeChecked()

    await pesquisa.filtrarPorWikipediaEAjuda()

    await expect(page).toHaveURL(/profile=advanced/)
    await expect(locators.listaResultados).toBeVisible()
    await expect(locators.primeiroResultado).toBeVisible()

    await pesquisa.abrirPrimeiroResultado()

    await expect(page).toHaveURL(/\/wiki\/(?:Wikip%C3%A9dia|Ajuda):/)
    await expect(locators.tituloArtigo).toBeVisible()
  })
})
