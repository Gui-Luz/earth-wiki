import Sequelize from 'sequelize';
import db from '../repository/db.js';
import User from './users.models.js';
import featureItem from './featureItem.models.js';
import pointModel from './point.models.js';

const scoreModel = db.define('score', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },  
    pointId: {
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

scoreModel.belongsTo(pointModel, {
    foreignKey: "pointId",

});

scoreModel.belongsTo(featureItem, {
    foreignKey: "featureId",

});

export default scoreModel