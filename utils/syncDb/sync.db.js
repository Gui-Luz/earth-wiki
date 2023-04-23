import User from '../../models/users.models.js';
import featureCategory from '../../models/featureCategory.models.js';
import featureItem from '../../models/featureItem.models.js';
import pointModel from '../../models/point.models.js';
import scoreModel from '../../models/score.models.js';
import db from '../../repository/db.js'

db.sync({ force: true })
    .then(() => console.log('User table synchronized'))
    .catch((error) => console.error('Error synchronizing user table:', error));