import featureCategoryModel from '../models/featureCategory.models.js'

async function getFeatureCategoryByName(name) {
  return await featureCategoryModel.findOne({
    where: {
      name,
    },
  })
}

async function insertFeatureCategory(featureCategory) {
  try {
    return await featureCategoryModel.create(featureCategory)
  } catch (err) {
    throw err
  }
}

async function getFeatureCategories(page) {
  if (page) {
    const itemsPerPage = 10 // Number of items to show per page

    // Calculate the offset for the current page
    const offset = (page - 1) * itemsPerPage

    // Fetch feature categories using offset and limit
    return await featureCategoryModel.findAll({
      offset: offset,
      limit: itemsPerPage,
    })
  } else {
    // If no page parameter provided, return all results
    return await featureCategoryModel.findAll()
  }
}

export default {
  insertFeatureCategory,
  getFeatureCategoryByName,
  getFeatureCategories,
}
