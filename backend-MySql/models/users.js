module.exports = (sequelize, type ) => {
    return sequelize.define('usuarios',{
        username: type.STRING,
        email: type.STRING,
        password: type.STRING(150)
    },
        {
            timestamps: true
        }
    );
}