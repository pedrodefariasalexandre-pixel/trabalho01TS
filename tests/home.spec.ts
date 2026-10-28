import { expect, test } from '../fixtures/WikipediaFixtures'

test.describe('Wikipédia - página inicial', () => {
  test('exibe um único campo principal de pesquisa', async ({ home, navigation }) => {
    await navigation.openHome()

    await expect(home.mainSearch).toHaveCount(1)
    await expect(home.searchInput).toHaveCount(1)
    await expect(home.searchInput).toBeVisible()
    await expect(home.searchInput).toBeEnabled()
  })
})
