const Clientes = (sequelize, DataType) => {
    return sequelize.define('clientes', {
        id: {
            primaryKey: true,
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
        },
        nome: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        cpf: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        pasword: DataType.STRING,
        ativo: DataType.BOOLEAN,
    })
}

module.exports = Clientes
