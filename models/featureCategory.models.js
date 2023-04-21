import Sequelize from 'sequelize'
import db from '../repository/db.js'
import User from "./users.models.js"

const featureCategory = db.define('featureCategory', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },  
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    creationUserId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        },
    updatedUserId: {
        type: Sequelize.INTEGER,
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

featureCategory.belongsTo(User, {
    foreignKey: "creationUserId",

});

featureCategory.belongsTo(User, {
    foreignKey: "updatedUserId",
    
});

export default featureCategory