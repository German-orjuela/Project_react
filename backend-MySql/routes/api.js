const router = require('express').Router() ;
const middlewares = require('./middlewares');
const apiUserRouter = require('./api/user');
const apiPersonaRouter = require('./api/personas');

// 
router.use('/user',  apiUserRouter ) ;
router.use('/personas',middlewares.checkToken, apiPersonaRouter ) ;
module.exports = router ;