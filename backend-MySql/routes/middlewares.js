const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next ) => {
    if(!req.headers['user-token']){
        return res.json({ error: 'Necesitas incluir el user token en la cabecera'});
    }

    const userToken = req.headers['user-token'];
    
    let payload = {} ;
    try {
    playload = jwt.decode(userToken,'frace secreta') ;
    console.log(playload.usuarioId);
    } catch (err){
        return res.json({ error: 'El token es incorrecto'});
    }

    if (payload.expiredAt < moment().unix() ) {
        return res.json({ error: 'El token ha expirado'});
    }

    req.usuarioId = payload.usuarioId;
    next();
}

module.exports ={
    checkToken: checkToken 
}