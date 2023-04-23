import featureItemRepository from "../repository/featureItem.repository.js";

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
    postFeatureItem: post
}