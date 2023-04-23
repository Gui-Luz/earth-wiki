import ruleModel from "../models/rule.models.js"

async function insertRule(point) {
    try {
        return await ruleModel.create(point)
    } catch (err) {
        throw err
    }
}

export default {
    insertPoint: insertRule
}