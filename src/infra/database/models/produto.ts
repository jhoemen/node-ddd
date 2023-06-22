const Produtos = (sequelize, DataType) => {
    return sequelize.define('produtos', {
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
        descricao: DataType.STRING,
        preco: DataType.DECIMAL(10, 2),
        imagem: DataType.STRING,
        ativo: DataType.BOOLEAN,
    })
}

module.exports = Produtos
