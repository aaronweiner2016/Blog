const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');
const notesSeed = require('./notesData');
const postSeed = require('./postData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await postSeed();

  await notesSeed();


  process.exit(0);
};

seedDatabase();
