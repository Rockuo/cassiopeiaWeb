/**
 * Created by rockuo on 4.6.17.
 */
import * as models from '../models';
import fs from 'fs';

for(let model in models) {

    let attributes = models[model].attributes;

    for(let column in attributes) {
        delete attributes[column].Model;
        delete attributes[column].fieldName;
        delete attributes[column].field;
        for(let property in attributes[column]) {
            if(property.startsWith('_')) {
                delete attributes[column][property];
            }
        }
    }

    let schema = JSON.stringify(attributes, null, 2);
    let tableName = models[model].tableName;

    let template = `'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('${tableName}', ${schema});
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable(${tableName});
  }
};`;
    console.log(`${models[model].tableName}--------------------- `);
    console.log(template);
    if(models[model].tableName !== undefined) {
        fs.writeFile(__dirname + '/tmp/' + models[model].tableName + '.js', template, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    }

}