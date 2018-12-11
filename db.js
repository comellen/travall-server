const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DATABASE_URL ||
    `postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhost/${process.env.NAME}`,
    {
        dialect: 'postgres',
    });

const User = sequelize.import('./models/user');
const Travall = sequelize.import('./models/travall');
const Transport = sequelize.import('./models/transport');
const Activity = sequelize.import('./models/activity');


Travall.belongsToMany(User, {through: 'trips'});
User.belongsToMany(Travall, {through: 'trips'});

Transport.belongsTo(Travall);
Activity.belongsTo(Travall);

Travall.hasMany(Transport);
Travall.hasMany(Activity);

sequelize.authenticate()
    .then(() => console.log('Connection to database successful'))
    .catch(err => console.log('Unable to connect to database', err));

module.exports = sequelize;