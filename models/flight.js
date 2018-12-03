module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        dateArrival: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        dateDeparture: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        airlineTo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        airlineFrom: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
};