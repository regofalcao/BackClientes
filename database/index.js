const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const database = new Sequelize(dbConfig);
const logger = require('../config/logger');

async function testConn() {
    try {
        await database.authenticate();
        logger.info('Banco conectado com sucesso');
    } catch (e) {
        logger.error({ err: e }, 'Falha ao conectar com o banco: ');
    }
}
testConn();
module.exports = database;