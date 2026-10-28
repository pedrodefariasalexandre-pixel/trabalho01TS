import type { Locator, Page } from '@playwright/test'

export class WikipediaArticleLocators {
  readonly title: Locator

  constructor(page: Page) {
    this.title = page.locator('#firstHeading')
  }
}
