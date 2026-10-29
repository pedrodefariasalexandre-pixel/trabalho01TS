import { Locator, Page } from '@playwright/test'

export class WikipediaLocators {
  readonly buscaPrincipal: Locator
  readonly campoPesquisa: Locator
  readonly conteudoDestacado: Locator
  readonly eventosAtuais: Locator
  readonly paginaInicial: Locator
  readonly portais: Locator
  readonly tituloArtigo: Locator

  constructor(page: Page) {
    this.buscaPrincipal = page.getByRole('search')
    this.campoPesquisa = this.buscaPrincipal.locator('input[name="search"]')
    this.conteudoDestacado = page
      .locator('#p-navigation')
      .getByRole('link', { name: 'Conteúdo destacado', exact: true })
    this.eventosAtuais = page
      .locator('#p-navigation')
      .getByRole('link', { name: 'Eventos atuais', exact: true })
    this.paginaInicial = page
      .locator('#p-navigation')
      .getByRole('link', { name: 'Página principal', exact: true })
    this.portais = page
      .locator('#p-navigation')
      .getByRole('link', { name: 'Portais', exact: true })
    this.tituloArtigo = page.getByRole('heading', { level: 1 })
  }
}
