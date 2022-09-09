const { Sequelize, DataTypes, Model } = require('sequelize');
const database = require("../database");

const Client = database.define('client', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    parentesco: DataTypes.STRING,
    street: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    number: DataTypes.INTEGER,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    state: DataTypes.STRING,
    complement: {
        type: DataTypes.STRING,
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
});

module.exports = Client;