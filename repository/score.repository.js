import scoreModel from "../models/score.models.js"

async function insertScore(score) {
    try {
        return await scoreModel.create(score)
    } catch (err) {
        throw err
    }
}

export default {
    insertScore
}