'use strict';
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        bio: DataTypes.TEXT,
        shit: DataTypes.BOOLEAN,
        seccondShit: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return User;
};