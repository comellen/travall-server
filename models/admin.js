module.exports = (sequelize, DataTypes) => {
    return sequelize.define('admin', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};