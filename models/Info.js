'use strict';
module.exports = function(sequelize, DataTypes) {
    const atributes = {
        title: DataTypes.STRING,
        type: DataTypes.STRING,
        text: DataTypes.TEXT,
        section: DataTypes.STRING,
    };

    const Info = sequelize.define('Info', atributes);

    Info.associate = function(models) {
        Info.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Info;
};