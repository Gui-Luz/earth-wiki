import featureItemModel from "../models/featureItem.models.js"

async function insertFeatureItem (featureItem) {
    try {
        return await featureItemModel.create(featureItem)
    } catch (err) {
        throw err
    }
}

export default {
    insertFeatureItem
}