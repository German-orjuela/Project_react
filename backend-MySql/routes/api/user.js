const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const { User } = require('../../database')
const moment = require('moment');
const jwt = require('jwt-simple');
// const middlewares = require('../middlewares');

//middlewares.checkToken,

router.get('/', async (req, res) => {
    //  res.send('Ingresando a la creción de no sabemos qué...') ;
    const users = await User.findAll();
    res.json(users);

});


// crear nuevos usuarios  api/user
router.post('/register', [
    check('username', 'Error en el campo nombre es obligatorio').not().isEmpty(),
    check('password', 'Error en el campo password es obligatorio').not().isEmpty(),
    check('email', 'El campo email debe ser correcto').isEmail()
], async (req, res,next) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ errores: errors.array() })
    }
   // console.log(req.param) ;
    const newUser = req.body.email

    const user1 = await User.findOne({ where: { email: newUser } });
    //console.log(user1) ;
    if (user1 === null) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create(req.body);
    } else {
        //console.log(user instanceof User); // true
        //console.log(user.email); // 'My Title'
        //   req.data = {} ;
        //   console.log(res.json({ errores: 'Usuario ya existe' }))
        // return res.status(400).json({ errores: 'Usuario ya existe' })
        return res.json({ errores: 'Usuario ya existe' })
    }
    //return res.json(user1);
});

// modificacion de usuarios
router.put('/:userId', async (req, res) => {
    await User.update(req.body, {
        where: { id: req.params.userId }
    });
    //res.json({ success: 'Superrrr: ya se modificó'}) ;
});

// Elimina de usuarios
router.delete('/:userId', async (req, res) => {
    await User.destroy({
        where: { id: req.params.userId }
    });
    //res.json({ success: 'Superrrr: ya se modificó'}) ;
});

// retorna un TOKEN para acceso a opciones 
// requiere req.headers['user-token']  según indicaciones del MIDDLEWARES
router.post('/login', async (req, res,next ) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales) {
            res.json({ success: creatToken(user), userName: user.username, userEmail: user.email,userId: user.id });
        } else {
            res.json({ error: 'Error, usuario no registrado o password erroneo...' });
        }
    } else {
        res.json({ error: 'Error, usuario no registrado o password erroneo...' });
    }
});

const creatToken = (user) => {
    const payload = {
        usuarioID: user.id,
        createdAT: moment().unix(),
        expiredAt: moment().add(50, 'minutes').unix()
    }

    return jwt.encode(payload, 'frace secreta');

}

module.exports = router;

// User.findById(1,{ attributes: ['firstname'] })
//   .then(user => {
//     console.log(user.toJSON())
//   })
//   .catch(err => {
//     console.log(err)
//   })