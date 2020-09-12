module.exports = (sequelize, type ) => {
    return sequelize.define('persona',{
        idmaestro: type.INTEGER,
        nombres: type.STRING,
        apellidos: type.STRING,
        telefono: type.STRING,
        edad: type.INTEGER,
        talla: type.DECIMAL,
        peso: type.INTEGER,
        genero: type.STRING,
        tension: type.BOOLEAN,
        diabetes: type.BOOLEAN,
        colon: type.BOOLEAN,
        obesidad: type.BOOLEAN
    },
        {
            timestamps: true
        }
    );
}