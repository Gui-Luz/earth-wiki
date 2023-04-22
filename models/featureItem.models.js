import Sequelize from 'sequelize'
import db from '../repository/db.js'
import User from "./users.models.js"
import featureCategoryModel from './featureCategory.models.js'

const featureItem = db.define('featureItem', {
    geom: {
        type: Sequelize.GEOMETRY,
        allowNull: false
    },
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },  
    featureCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: featureCategoryModel,
            key: 'id'
    },
    creationUserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    updatedUserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
  }
}, {
  schema: 'core',
  underscored: true
}
)

featureItem.belongsTo(User, {
    foreignKey: "creationUserId",

});

featureItem.belongsTo(User, {
    foreignKey: "updatedUserId",
    
});

featureItem.belongsTo(featureCategoryModel, {
    foreignKey: "featureCategoryId",
    
});

export default featureItem