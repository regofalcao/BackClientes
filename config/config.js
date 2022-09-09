module.exports = {
    development: {
        username: process.env.USER_DB,
        password: process.env.USER_PASS_DB,
        database: process.env.DATABASE,
        host: process.env.HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        },
        test: {
            username: process.env.USER_DB,
            password: process.env.USER_PASS_DB,
            database: process.env.DATABASE,
            host: process.env.HOST,
            port: process.env.DB_PORT,
            dialect: 'postgres',
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false
                }
            }
        },
        production: {
            username: process.env.USER_DB,
            password: process.env.USER_PASS_DB,
            database: process.env.DATABASE,
            host: process.env.HOST,
            port: process.env.DB_PORT,
            dialect: 'postgres',
            logging: false,
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false
                }
            }
        }
    }
}