import { Locator, Page } from '@playwright/test'

export class WikipediaLocators {
  readonly abaPesquisaAvancada: Locator
  readonly botaoPesquisarResultados: Locator
  readonly buscaPrincipal: Locator
  readonly campoPesquisa: Locator
  readonly conteudoDestacado: Locator
  readonly eventosAtuais: Locator
  readonly filtroAjuda: Locator
  readonly filtroArtigos: Locator
  readonly filtroWikipedia: Locator
  readonly listaResultados: Locator
  readonly mensagemSemResultados: Locator
  readonly paginaInicial: Locator
  readonly portais: Locator
  readonly primeiroResultado: Locator
  readonly tituloArtigo: Locator

  constructor(page: Page) {
    this.abaPesquisaAvancada = page
      .locator('.mw-search-profile-tabs')
      .getByRole('link', { name: 'Avançado', exact: true })
    this.botaoPesquisarResultados = page
      .locator('#mw-search-top-table')
      .getByRole('button', { name: 'Pesquisar', exact: true })
    this.buscaPrincipal = page.getByRole('search')
    this.campoPesquisa = this.buscaPrincipal.locator('input[name="search"]')
    this.conteudoDestacado = page
      .locator('#p-navigation')
      .getByRole('link', { name: 'Conteúdo destacado', exact: true })
    this.eventosAtuais = page
      .locator('#p-navigation')
      .getByRole('link', { name: 'Eventos atuais', exact: true })
    this.filtroAjuda = page.locator('input[name="ns12"]')
    this.filtroArtigos = page.locator('input[name="ns0"]')
    this.filtroWikipedia = page.locator('input[name="ns4"]')
    this.listaResultados = page.locator('.mw-search-results')
    this.mensagemSemResultados = page.locator('.mw-search-nonefound')
    this.paginaInicial = page
      .locator('#p-navigation')
      .getByRole('link', { name: 'Página principal', exact: true })
    this.portais = page
      .locator('#p-navigation')
      .getByRole('link', { name: 'Portais', exact: true })
    this.primeiroResultado = page.locator('.mw-search-result-heading a').first()
    this.tituloArtigo = page.getByRole('heading', { level: 1 })
  }
}
