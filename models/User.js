'use strict';
module.exports = function(sequelize, DataTypes) {
    const atributes = {
        firstName: {type:DataTypes.STRING, allowNull: false},
        lastName: {type:DataTypes.STRING, allowNull: false},
        password: {type:DataTypes.STRING, allowNull: false},
        username: {type: DataTypes.STRING, unique: true},
        role: {type:DataTypes.STRING, allowNull: true}
    };

    return sequelize.define('User',atributes);
};