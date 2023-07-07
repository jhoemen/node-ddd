module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('situacoes', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            descricao: {
                type: Sequelize.STRING(50),
                allowNull: false,
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
        await queryInterface.dropTable('situacoes')
    },
}
