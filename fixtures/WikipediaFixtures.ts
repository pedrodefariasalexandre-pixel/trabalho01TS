import { test as base } from '@playwright/test'
import { WikipediaNavigationActions } from '../actions/WikipediaNavigationActions'
import { WikipediaSearchActions } from '../actions/WikipediaSearchActions'
import { WikipediaArticleLocators } from '../locators/WikipediaArticleLocators'
import { WikipediaHomeLocators } from '../locators/WikipediaHomeLocators'

type WikipediaFixtures = {
  article: WikipediaArticleLocators
  home: WikipediaHomeLocators
  navigation: WikipediaNavigationActions
  search: WikipediaSearchActions
}

export const test = base.extend<WikipediaFixtures>({
  article: async ({ page }, use) => {
    await use(new WikipediaArticleLocators(page))
  },
  home: async ({ page }, use) => {
    await use(new WikipediaHomeLocators(page))
  },
  navigation: async ({ page }, use) => {
    await use(new WikipediaNavigationActions(page))
  },
  search: async ({ page }, use) => {
    await use(new WikipediaSearchActions(page))
  },
})

export { expect } from '@playwright/test'
