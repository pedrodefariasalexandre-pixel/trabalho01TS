import { Locator, Page } from '@playwright/test'

export class WikipediaLocators {
  readonly buscaPrincipal: Locator
  readonly campoPesquisa: Locator
  readonly tituloArtigo: Locator

  constructor(page: Page) {
    this.buscaPrincipal = page.getByRole('search')
    this.campoPesquisa = this.buscaPrincipal.locator('input[name="search"]')
    this.tituloArtigo = page.getByRole('heading', { level: 1 })
  }
}
