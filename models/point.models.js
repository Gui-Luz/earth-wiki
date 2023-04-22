import Sequelize from 'sequelize'
import db from '../repository/db.js'

const pointModel = db.define('point', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },  
    action: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    point: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
}, {
    schema: 'game',
    underscored: true
  })

export default pointModel
