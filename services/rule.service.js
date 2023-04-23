import pointRepository from "../repository/rule.repository.js";

async function post (point) {
	try {
        return await pointRepository.insertPoint(point)
	} catch (err) {
		throw err
	}
}

export default {
    post
}