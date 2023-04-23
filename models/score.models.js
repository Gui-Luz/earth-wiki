import Sequelize from 'sequelize';
import db from '../repository/db.js';
import User from './user.models.js';
import featureItem from './featureItem.models.js';
import ruleModel from './rule.models.js';

const scoreModel = db.define('scores', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },  
    ruleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    featureId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    schema: 'game',
    underscored: true
  })

scoreModel.belongsTo(User, {
    foreignKey: "userId",

});

scoreModel.belongsTo(ruleModel, {
    foreignKey: "ruleId",

});

scoreModel.belongsTo(featureItem, {
    foreignKey: "featureId",

});

export default scoreModel