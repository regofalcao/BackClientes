module.exports = {
    database: process.env.DATABASE,
    username: process.env.USER_DB,
    password: process.env.USER_PASS_DB,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === "development",
    // dialectOptions: {
    //     ssl: {
    //         rejectUnauthorized: false
    //     }
    // },
    define: {
        timestamps: false,
        freezeTableName: true
    },
    logging: false
};