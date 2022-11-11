const { Router } = require('express');


const userRoute = require('./users/users');
const qrRoute = require('./qrToken/qrToken');

const router = Router();



router.use('/users', userRoute);
router.use('/qr', qrRoute);


module.exports = router;