module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pedidos', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            cliente_id: {
                type: Sequelize.UUID,
                references: { model: 'clientes', key: 'id' },
                allowNull: false,
            },
            situacao_id: {
                type: Sequelize.UUID,
                references: { model: 'situacoes', key: 'id' },
                allowNull: false,
            },
            valor_total: {
                type: Sequelize.DECIMAL(10, 2),
            },
            valor_desconto: {
                type: Sequelize.DECIMAL(10, 2),
            },
            valor_acrescimo: {
                type: Sequelize.DECIMAL(10, 2),
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
        await queryInterface.dropTable('pedidos')
    },
}
