module.exports = (sequelize, DataTypes) => {
    return sequelize.define('transportation', {
        dOrA: {
            type: DataTypes.ENUM('Departure', 'Arrival'),
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('Flight', 'Train', 'Bus', 'Car', 'Boat', 'Other'),
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        upTime: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        downTime: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        users: {
            type: DataTypes.ARRAY,
            allowNull: true,
        },
    });
};