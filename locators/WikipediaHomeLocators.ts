import type { Locator, Page } from '@playwright/test'

export class WikipediaHomeLocators {
  readonly mainSearch: Locator
  readonly searchInput: Locator

  constructor(page: Page) {
    this.mainSearch = page.getByRole('search')
    this.searchInput = this.mainSearch.locator('input[name="search"]')
  }
}
