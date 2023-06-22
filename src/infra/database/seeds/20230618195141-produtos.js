'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('produtos', [
            {
                id: '767fe3f2-9983-48ab-a20d-4de74175db25',
                nome: 'Produto Teste 1',
                descricao: 'Descrição do produto teste 1',
                preco: '10.00',
                imagem: 'https://braswu.vteximg.com.br/arquivos/ids/204554-1000-1000/img-produto-teste--1-.png?v=637850297273230000',
            },
            {
                id: 'c8ed6c49-910c-46e9-9b25-2c14f18338d9',
                nome: 'Produto Teste 2',
                descricao: 'Descrição do produto teste 2',
                preco: '20.00',
                imagem: 'https://static3.tcdn.com.br/img/img_prod/468236/produto_teste_auaha_7625_1_f816ad73890b2db46e6e460c44ae5d22.png',
            },
            {
                id: 'eadbad49-d935-4a26-afcd-5c89019751e9',
                nome: 'Produto Teste 3',
                descricao: 'Descrição do produto teste 3',
                preco: '30.00',
                imagem: 'https://images.tcdn.com.br/img/img_prod/477608/produto_teste_auaha_100519_3_a54bab0298356a66aa94c7d7b027314b.png',
            },
            {
                id: '8f064ff7-b447-4470-8c51-78b144737281',
                nome: 'Produto Teste 4',
                descricao: 'Descrição do produto teste 4',
                preco: '40.00',
                imagem: 'https://images.tcdn.com.br/img/img_prod/477608/produto_teste_auaha_100519_3_a54bab0298356a66aa94c7d7b027314b.png',
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('produtos', null, {})
    },
}
