import featureItemModel from "../models/featureItem.models.js"

async function insertFeatureItem (featureItem) {
    try {
        return await featureItemModel.create(featureItem)
    } catch (err) {
        throw err
    }
}

async function getFeatureItems () {
    try {
        return await featureItemModel.findAll()
    } catch (err) {
        throw err
    }
}

async function getFeatureItemsWhereCategory (featureCategoryId) {
    try {
        return await featureItemModel.findAll({
            where: {
                featureCategoryId
            }
        })
    } catch (err) {
        throw err
    }
}

export default {
    insertFeatureItem,
    getFeatureItems,
    getFeatureItemsWhereCategory
}