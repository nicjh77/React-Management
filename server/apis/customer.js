const express = require('express');
const db = require('../config/index');
const parse = require('postgres-date');

module.exports = function(){
    const router = express.Router();

    router.get('/', (req, res) => {
        const getQuery = 'SELECT * FROM CUSTOMERS WHERE isDeleted = 0';

        db.execute(getQuery, (err, results) => {
            return res.status(200).json({success: true, customers: results.rows});
        });
    });

    router.post('/', (req, res) => {
        // valid regulartion && exist

        const { name, birthday, gender, job } = req.body;
     
        // delete해도 데이터베이스와 사진에는 그대로존재

        const now = new Date();

        // photo validation
        let image = '/image/' + req.file.filename;
        let insertQuery = 'INSERT INTO CUSTOMERS(image, name, birthday, gender, job, createddate, isdeleted) VALUES($1, $2, $3, $4, $5, $6, $7)';
        db.executeEscape(insertQuery, [image, name, birthday, gender, job, now, 0], (error, results, fields) => {
            if(error)
                return res.status(400).json({success: false, error: error});
            return res.status(201).json({success: true, result: results});
        });
    });

    router.delete('/:id', (req, res) => {
        const id = parseInt(req.params.id);
        let deleteQuery = 'UPDATE CUSTOMERS SET isDeleted = 1, deletedDate = now() WHERE id = $1';
        db.executeEscape(deleteQuery, [id], (err, results) => {
            if(err)
                return res.status(400).json({success: false, error: error});
            return res.status(200).json({success: true, result: results});
        });
    })

    
    return router;
}