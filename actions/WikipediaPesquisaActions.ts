import { Page } from '@playwright/test'
import { WikipediaLocators } from '../locators/WikipediaLocators'

export class WikipediaPesquisaActions {
  private locators: WikipediaLocators

  constructor(page: Page) {
    this.locators = new WikipediaLocators(page)
  }

  async pesquisarPor(termo: string) {
    await this.locators.campoPesquisa.fill(termo)
    await this.locators.campoPesquisa.press('Enter')
  }

  async abrirPrimeiroResultado() {
    await this.locators.primeiroResultado.click()
  }
}
