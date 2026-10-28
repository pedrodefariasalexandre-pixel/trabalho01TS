import type { Page } from '@playwright/test'
import { URLS } from '../utils/urls'

export class WikipediaNavigationActions {
  constructor(private readonly page: Page) {}

  async openHome(): Promise<void> {
    await this.page.goto(URLS.wikipediaHome, { waitUntil: 'domcontentloaded' })
  }
}
