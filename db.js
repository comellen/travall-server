const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DBNAME, process.env.PGUSER, process.env.PGPASS, {
    host: 'localhost',
    dialect: 'postgres'
});

const User = require('./models/user');
const Travall = require('./models/user');
const Transportation = require('./models/user');
// const Activity = require('./models/activity');


User.belongsToMany(Travall); //should create another table 
Travall.hasMany(User);
Transportation.belongsTo(Travall);
// Activity.belongsTo(Travall);

sequelize.authenticate()
    .then(() => console.log('Connection to database successful'))
    .catch(err => console.log('Unable to connect to database', err));

module.exports = sequelize;