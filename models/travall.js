const sequelize = require('../db');
// const User = sequelize.import('../models/user');

module.exports = (sequelize, DataTypes) => {
    const Travall = sequelize.define('travall', {
        // travallID: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: true,
        //     validate: {
        //         isNumeric: true
        //     },
        // },
        title: {
           type: DataTypes.STRING,
           allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('Business', 'Family', 'Fun', 'Pleasure', 'Vacation'),
        },
        startDate: {
            type: DataTypes.DATEONLY,
        },
        endDate: {
            type: DataTypes.DATEONLY,
        },
        tripOf: {
            type: DataTypes.INTEGER,
        },
    });
    // User.hasMany(Travall);
    // Travall.belongsToMany(User);

    return Travall;
}