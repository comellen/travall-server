module.exports = (sequelize, DataTypes) => {
    return sequelize.define('travall', {
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
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