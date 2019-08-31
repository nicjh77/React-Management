const express = require('express');
const db = require('../config/index');

module.exports = function(){
    const router = express.Router();

    router.get('/', (req, res) => {
        const sqlText = 'select * from customers';

        db.execute(sqlText, (err, results) => {
            return res.status(200).json({success: true, customers: results.rows});
        });
    });
    return router;
}