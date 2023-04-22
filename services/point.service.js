import pointRepository from "../repository/point.repository.js";

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