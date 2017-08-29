'use strict';
module.exports = function(sequelize, DataTypes) {
    const atributes = {
        contactAttributes: {type: DataTypes.STRING},
    };

    const Contact = sequelize.define('Contact', atributes);

    Contact.associate = function(models) {
        Contact.belongsTo(models.Contact, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Contact;
};