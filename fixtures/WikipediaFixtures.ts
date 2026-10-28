import { test as base } from '@playwright/test'
import { WikipediaNavigationActions } from '../actions/WikipediaNavigationActions'
import { WikipediaHomeLocators } from '../locators/WikipediaHomeLocators'

type WikipediaFixtures = {
  home: WikipediaHomeLocators
  navigation: WikipediaNavigationActions
}

export const test = base.extend<WikipediaFixtures>({
  home: async ({ page }, use) => {
    await use(new WikipediaHomeLocators(page))
  },
  navigation: async ({ page }, use) => {
    await use(new WikipediaNavigationActions(page))
  },
})

export { expect } from '@playwright/test'
