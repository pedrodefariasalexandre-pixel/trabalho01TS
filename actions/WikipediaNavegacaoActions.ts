import { Page } from '@playwright/test'
import { WikipediaLocators } from '../locators/WikipediaLocators'
import { URLS } from '../utils/urls'

export class WikipediaNavegacaoActions {
  private page: Page
  private locators: WikipediaLocators

  constructor(page: Page) {
    this.page = page
    this.locators = new WikipediaLocators(page)
  }

  async acessarPaginaInicial() {
    await this.page.goto(URLS.paginaInicial)
  }

  async acessarConteudoDestacado() {
    await this.locators.conteudoDestacado.click()
  }

  async acessarEventosAtuais() {
    await this.locators.eventosAtuais.click()
  }

  async acessarPortais() {
    await this.locators.portais.click()
  }

  async voltarParaPaginaInicial() {
    await this.locators.paginaInicial.click()
  }
}
