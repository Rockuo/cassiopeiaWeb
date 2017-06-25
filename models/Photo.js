'use strict';
module.exports = function(sequelize, DataTypes) {
    const atributes = {
        title: DataTypes.STRING,
        name: DataTypes.STRING,
        URL: DataTypes.STRING,
    };

    const Photo = sequelize.define('Photo', atributes);

    Photo.associate = function(models) {
        Photo.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Photo;
};