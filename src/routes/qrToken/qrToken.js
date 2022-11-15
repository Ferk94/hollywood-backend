const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {db} = require('../../firebase/firebaseConfig');
const tableName = require('../../firebase/firebaseKey');
const { v4: uuidv4 } = require('uuid');



router.get('/:id', (req, res, next) => {

    const { id } = req.params;

    if(id){
        const today = new Date();
        const now = today.getTime()

        //opcion con math.random
        let random = parseInt(Math.random().toString().split('.')[1])

        //opcion con uuid

        let uniqueId = uuidv4().split('-').join('')
        res.json({uniqueId, now})

    }else {
        next({msg: 'fatal error'})
    }
    
})


module.exports = router;