'use strict';
module.exports = function(sequelize, DataTypes) {
    const atributes = {
        firstName: {type:DataTypes.STRING, allowNull: false},
        lastName: {type:DataTypes.STRING, allowNull: false},
        password: {type:DataTypes.STRING, allowNull: false},
        username: {type: DataTypes.STRING, unique: true},
        roles: {type:DataTypes.STRING, allowNull: false}
    };

    return sequelize.define('User',atributes, {
        getterMethods: {
            roles() {
                return JSON.parse(this.getDataValue('roles'));
            }
        },
        setterMethods: {
            roles(value) {
                this.setDataValue('roles', JSON.stringify(value));
            },
        }
    });
};