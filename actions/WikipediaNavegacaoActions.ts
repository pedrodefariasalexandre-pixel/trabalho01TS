import { Page } from '@playwright/test'
import { URLS } from '../utils/urls'

export class WikipediaNavegacaoActions {
  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  async acessarPaginaInicial() {
    await this.page.goto(URLS.paginaInicial)
  }
}
