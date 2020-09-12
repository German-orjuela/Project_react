const router = require('express').Router() ;
const { Persona } = require('../../database')

router.get('/:userId', async (req, res) => {
 //   res.send('Ingresando a la seccion de personas...') ;
    const users = await Persona.findAll(req.body, {
        where: { idmaestro: req.params.userId }
    });
    console.log(users) ;
    res.json(users) ;

}) ;

router.post('/new', async (req, res) => {
    const user = await Persona.create(req.body);
    res.json(user) ;

}) ;

router.put('/:userId', async (req, res) => {
    await Persona.update(req.body, {
        where: { id: req.params.userId }
    });
    res.json({ success: 'Superrrr: ya se modificó'}) ;
}) ;

router.delete('/:userId', async (req, res) => {
    await Persona.destroy({
       where: { id: req.params.userId }
    });
    res.json({ success: 'Superrrr: ya se modificó'}) ;
}) ;

module.exports = router ;

// User.findById(1,{ attributes: ['firstname'] })
//   .then(user => {
//     console.log(user.toJSON())
//   })
//   .catch(err => {
//     console.log(err)
//   })