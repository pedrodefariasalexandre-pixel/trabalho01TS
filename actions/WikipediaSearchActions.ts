import type { Page } from '@playwright/test'
import { WikipediaHomeLocators } from '../locators/WikipediaHomeLocators'

export class WikipediaSearchActions {
  private readonly home: WikipediaHomeLocators

  constructor(page: Page) {
    this.home = new WikipediaHomeLocators(page)
  }

  async searchFor(term: string): Promise<void> {
    await this.home.searchInput.fill(term)
    await this.home.searchInput.press('Enter')
  }
}
