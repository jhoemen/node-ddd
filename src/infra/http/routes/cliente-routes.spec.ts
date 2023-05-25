import request from 'supertest'
import app from '../config/app'

describe('criar cliente', () => {
    it('Should return 401 when customer is not found api', async () => {
        await request(app)
            .post('/login')
            .send({
                email: 'jhoemen@gmail.com',
                password: '123',
            })
            .expect(401)
    })

    it('Should return 200 when create customer api', async () => {
        await request(app)
            .post('/cliente')
            .send({
                nome: 'jonathan',
                email: 'jhoemen@gmail4.com',
                cpf: '03890513144',
                password: '123',
                password_confirmation: '123',
            })
            .expect(200)
    })

    it('Should return 200 when login customer api', async () => {
        await request(app)
            .post('/login')
            .send({
                email: 'jhoemen@gmail4.com',
                password: '1234',
            })
            .expect(200)
    })
})
