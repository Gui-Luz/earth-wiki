import featureCategoryRepository from "../repository/featureCategory.repository.js";

async function postFeatureCategory (featureCategory, user) {
	try {
        featureCategory.name = featureCategory.name.toUpperCase()
        if (user.role !== 'admin'){
            throw new Error('Permission denied.')
        }
		else if (await featureCategoryRepository.getFeatureCategoryByName(featureCategory.name)) {
			throw new Error('Feature category name already in use.')
		} else {
            featureCategory.updatedUserId = user.id;
			return await featureCategoryRepository.insertFeatureCategory(featureCategory)
		}
	} catch (err) {
		throw err
	}
}

export default {
    postFeatureCategory
}