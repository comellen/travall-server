const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.NAME, process.env.USERNAME, process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.sync(
    // {force: true}
    );

// const User = require('./models/user');
// const Travall = require('./models/travall');
// const Transportation = require('./models/transport');
// const Activity = require('./models/activity');

db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./models/user')(sequelize, Sequelize);
db.travalls = require('./models/travall')(sequelize, Sequelize);
// db.transport = require('./models/transport')(sequelize, Sequelize);

let User = db.users;
let Travall = db.travalls

// User.hasMany(Travall, {as:'crewmembers'});
Travall.belongsToMany(User, {through: 'trips'});
User.belongsToMany(Travall, {through: 'trips'});
// db.users.belongsToMany(db.travall, {through: 'tripcrew'});
// db.travall.hasMany(db.users);
// db.transport.belongsTo(db.travall);

// User.hasMany(Travall, {as: 'trips'});
// User.belongsToMany(Travall, {through: 'tripcrew'});
// Travall.belongsToMany(User, {through: 'tripcrew'});
// Travall.hasMany(User);
// Transportation.belongsTo(Travall);
// Activity.belongsTo(Travall);

sequelize.authenticate()
    .then(() => console.log('Connection to database successful'))
    .catch(err => console.log('Unable to connect to database', err));

module.exports = sequelize;