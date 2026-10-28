import { test as base } from '@playwright/test'
import { WikipediaNavegacaoActions } from '../actions/WikipediaNavegacaoActions'
import { WikipediaPesquisaActions } from '../actions/WikipediaPesquisaActions'
import { WikipediaLocators } from '../locators/WikipediaLocators'

type WikipediaFixtures = {
  locators: WikipediaLocators
  navegacao: WikipediaNavegacaoActions
  pesquisa: WikipediaPesquisaActions
}

export const test = base.extend<WikipediaFixtures>({
  locators: async ({ page }, use) => {
    await use(new WikipediaLocators(page))
  },
  navegacao: async ({ page }, use) => {
    await use(new WikipediaNavegacaoActions(page))
  },
  pesquisa: async ({ page }, use) => {
    await use(new WikipediaPesquisaActions(page))
  },
})

export { expect } from '@playwright/test'
