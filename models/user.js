let sequelize = require('../db');
// const Travall = sequelize.import('../models/travall');
// const Transport = sequelize.import('../models/transport');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        // userID: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true,
        //     allowNull: true,
        //     validate: {
        //         isNumeric: true
        //     },
        // },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            },
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'grey',
        },
    });
    // Travall.hasMany(User);
    // Travall.hasMany(Transport);
    // User.belongsToMany(Travall);

    return User;
};