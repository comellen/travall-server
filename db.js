const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.NAME, process.env.USERNAME, process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
});

const User = sequelize.import('./models/user');
const Travall = sequelize.import('./models/travall');
const Transport = sequelize.import('./models/transport');
const Activity = sequelize.import('./models/activity');


Travall.belongsToMany(User, {through: 'trips'});
User.belongsToMany(Travall, {through: 'trips'});

Travall.hasMany(Transport);
Travall.hasMany(Activity);

Transport.belongsToMany(User);
Activity.belongsToMany(User);


sequelize.authenticate()
    .then(() => console.log('Connection to database successful'))
    .catch(err => console.log('Unable to connect to database', err));

module.exports = sequelize;