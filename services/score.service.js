import scoreRepository from "../repository/score.repository.js";

async function post (score) {
	try {
        return await scoreRepository.insertScore(score)
	} catch (err) {
		throw err
	}
}

export default {
    post
}