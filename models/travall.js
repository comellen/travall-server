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
            type: DataTypes.ENUM('Business', 'Family', 'Fun', 'Pleasure', 'Vacation'),
        },
        startDate: {
            type: DataTypes.DATE,
        },
        endDate: {
            type: DataTypes.DATE,
        },
    })
}