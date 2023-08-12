import featureCategoryRepository from '../repository/featureCategory.repository.js'
import { getWikipediaPage } from '../utils/wikipedia/wikipedia.js'

async function post(featureCategory, user) {
  try {
    featureCategory.name = featureCategory.name.toLowerCase()
    if (
      await featureCategoryRepository.getFeatureCategoryByName(
        featureCategory.name
      )
    ) {
      throw new Error('Feature category name already in use.')
    } else {
      const wikiResult = await getWikipediaPage(featureCategory.name)
      try {
        const j = await wikiResult.json()
        featureCategory.name = j.title.toLowerCase()
        featureCategory.updatedUserId = user.id
        return await featureCategoryRepository.insertFeatureCategory(
          featureCategory
        )
      } catch (err) {
        throw new Error(
          `Category name ${featureCategory.name} not found in wikipedia`
        )
      }
    }
  } catch (err) {
    throw err
  }
}

async function get(featureCategory) {
  try {
    featureCategory.name = featureCategory.name.toLowerCase()
    const retrievedCategory =
      await featureCategoryRepository.getFeatureCategoryByName(
        featureCategory.name
      )
    const page = await getWikipediaPage(retrievedCategory.name)
    const pageJson = await page.json()
    const result = {
      ...retrievedCategory.dataValues,
      wikipedia: pageJson,
    }
    return result
  } catch (err) {
    throw err
  }
}

async function getAll(page) {
  try {
    const categories = await featureCategoryRepository.getFeatureCategories(
      page
    )
    const categoriesWithDescription = await Promise.all(
      categories.map(async (cat) => {
        const page = await getWikipediaPage(cat.name)
        const pageJson = await page.json()
        return {
          ...cat.dataValues,
          wikipedia: pageJson,
        }
      })
    )
    return categoriesWithDescription
  } catch (err) {
    throw err
  }
}

export default {
  post,
  getAll,
  get,
}
