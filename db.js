const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.NAME, process.env.USERNAME, process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('Connection to database successful'))
    .catch(err => console.log('Unable to connect to database', err));

module.exports = sequelize;