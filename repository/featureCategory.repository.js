import featureCategoryModel from "../models/featureCategory.models.js"

async function getFeatureCategoryByName(name) {
    return await featureCategoryModel.findOne({
      where: {
        name
      }
    })
  }

async function insertFeatureCategory (featureCategory) {
    try {
        return await featureCategoryModel.create(featureCategory)
    } catch (err) {
        throw err
    }
}

export default {
    insertFeatureCategory,
    getFeatureCategoryByName
}