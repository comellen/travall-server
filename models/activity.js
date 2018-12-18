module.exports = (sequelize, DataTypes) => {
    return sequelize.define('activity', {
       title: {
           type: DataTypes.STRING,
           allowNull: true,
           validate: {
               isAlphanumeric: true
           },
        },
        date: {
            type: DataTypes.DATEONLY,
        },
        startTime: {
            type: DataTypes.STRING,
        },
        endTime: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        travallId: {
            type: DataTypes.INTEGER,
        },
    });
};