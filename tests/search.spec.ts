import { expect, test } from '../fixtures/WikipediaFixtures'

test.describe('Wikipédia - pesquisa', () => {
  test('pesquisa um artigo e valida o resultado', async ({
    article,
    navigation,
    page,
    search,
  }) => {
    await navigation.openHome()
    await search.searchFor('Brasil')

    await expect(page).toHaveURL(
      /^https:\/\/pt\.wikipedia\.org\/wiki\/Brasil(?:$|[?#])/,
    )
    await expect(article.title).toBeVisible()
    await expect(article.title).toHaveText('Brasil')
  })
})
