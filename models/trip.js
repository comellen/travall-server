module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        tripStart: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        tripEnd: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        tripType: {
            type: DataTypes.ENUM('', 'Business', 'Family', 'Leisure')
        },
    });
};