import pointModel from "../models/point.models.js"

async function insertPoint(point) {
    try {
        return await pointModel.create(point)
    } catch (err) {
        throw err
    }
}

export default {
    insertPoint
}