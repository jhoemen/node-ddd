module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('produtos', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            descricao: {
                type: Sequelize.STRING,
            },
            preco: {
                type: Sequelize.DECIMAL(10, 2),
            },
            imagem: {
                type: Sequelize.STRING,
            },
            createdAt: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false,
                field: 'created_at',
            },
            updatedAt: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false,
                field: 'updated_at',
            },
            ativo: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: 1,
            },
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('produtos')
    },
}
