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

    router.post('/', (req, res) => {
        // valid regulartion && exist

        const { name, birthday, gender, job } = req.body;
        let image = '/image/' + req.file.filename;
        let insertText = 'INSERT INTO CUSTOMERS(image, name, birthday, gender, job) VALUES($1, $2, $3, $4, $5)';
        db.executeEscape(insertText, [image, name, birthday, gender, job], (error, results, fields) => {
            if(error)
                return res.status(400).json({success: false, error: error});
            return res.status(201).json({success: true, result: results});
        });
    });

    
    return router;
}