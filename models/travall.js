module.exports = (sequelize, DataTypes) => {
    return sequelize.define('travall', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
        },
        startDate: {
            type: DataTypes.DATEONLY,
        },
        endDate: {
            type: DataTypes.DATEONLY,
        },
    });
};