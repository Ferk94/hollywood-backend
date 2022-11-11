const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {db} = require('../../firebase/firebaseConfig');
const tableName = require('../../firebase/firebaseKey');



router.get('/:id', (req, res, next) => {

    const { id } = req.params;

    db.collection(tableName).doc(id).get()
    .then(doc => {
        jwt.sign({doc}, 'secretKey', {expiresIn: 86400}, (err, token) => {
            res.json({
                doc, token
            })
        })
    })

    .catch((err) => next(err))
})


module.exports = router;