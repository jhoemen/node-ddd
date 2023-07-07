'use strict'
const { v4: uuidv4 } = require('uuid')

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('situacoes', [
            {
                id: uuidv4(),
                descricao: 'Pendente',
            },
            {
                id: uuidv4(),
                descricao: 'Concluído',
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('situacoes', null, {})
    },
}
