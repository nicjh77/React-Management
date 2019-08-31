const dotenv = require('dotenv').config();
const Pool = require('pg').Pool;

module.exports = {
    connect: () => {
        const connection = new Pool({
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASS,
            port: process.env.PORT,
            database: process.env.DB
        });
        return connection;
    },
    execute: function(selectText, fc) {
        let connection = this.connect();
        connection.connect();
        connection.query(selectText, fc);
        connection.end();
    },
    executeEscape: function(selectText, params, fc) {
        let connection = this.connect();
        connection.connect();
        connection.query(selectText,params, fc);
        connection.end();
    }
};