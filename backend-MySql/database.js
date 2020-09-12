const Sequelize = require('sequelize') ;

const PersonaModel = require('./models/personas');
const UserModel    = require('./models/users');

const sequelize    = new Sequelize('apiagenda','root','',{
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

const Persona = PersonaModel(sequelize, Sequelize);
const User    = UserModel(sequelize, Sequelize);
// base de datos,username,password,{host:,dialect:'mysql'}

sequelize.sync({force: false })
    .then( () => {
        console.log('tabla sincronizada 1')
    })

module.exports = {
    Persona,
    User
}