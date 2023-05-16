const { adapt } = require('../adapters/express-router-adapter')
// const LoginRouter = require('../routes/login-routes')

module.exports = app => {
  app.get('/', function (req, res) {
    res.send('Sua home3');
  })

  app.post('/clientes/add', function (req, res) {
    res.send('Adicionar Cliente');
  })

  // LoginRouter(app)
}
