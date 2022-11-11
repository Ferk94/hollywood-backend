const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {db} = require('../../firebase/firebaseConfig');
const tableName = require('../../firebase/firebaseKey');



router.get('/:id', (req, res, next) => {

    const { id } = req.params;
    const today = new Date();
    const now = today.toLocaleString();
    db.collection(tableName).doc(id).get()
    .then(doc => {
        jwt.sign({doc}, 'secretKey', {expiresIn: 300}, (err, token) => {
            let hash = token.slice(0, 200)
            res.json({
                hash, now
            })
        })
    })

    .catch((err) => next(err))
})


module.exports = router;