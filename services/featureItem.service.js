import featureItemRepository from "../repository/featureItem.repository.js";

async function get(params) {
	try {
        if (params.featureCategoryId){
            return await featureItemRepository.getFeatureItemsWhereCategory(params.featureCategoryId)
        } else {
            return await featureItemRepository.getFeatureItems()
        }
	} catch (err) {
		throw err
	}
}

async function post (featureCategory, user) {
	try {
        featureCategory.creationUserId = user.id
        featureCategory.updatedUserId = user.id
        return await featureItemRepository.insertFeatureItem(featureCategory)
	} catch (err) {
		throw err
	}
}

export default {
    post,
    get
}