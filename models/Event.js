'use strict';
module.exports = function(sequelize, DataTypes) {
    const atributes = {
        title: DataTypes.STRING,
        type: DataTypes.STRING,
        text: DataTypes.TEXT,
        begin: DataTypes.DATE,
        end: DataTypes.DATE,
        section: DataTypes.STRING,
    };

    const Event = sequelize.define('Event', atributes);

    Event.associate = function(models) {
        Event.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Event;
};