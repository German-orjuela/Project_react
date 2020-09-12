const Sequelize = require('sequelize') ;

const PersonaModel = require('./models/personas');

const sequelize = new Sequelize('apiagenda2','root','',{
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

const Persona = PersonaModel(sequelize, Sequelize);

// base de datos,username,password,{host:,dialect:'mysql'}

sequelize.sync({force: false })
    .then( () => {
        console.log('tabla sincronizada')
    })

module.exports = {
    Persona
}