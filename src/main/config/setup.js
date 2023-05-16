const bodyParser = require('body-parser');

module.exports = app => {
  app.disable('x-powered-by')
  
  app.use( async(req, res, next) => {
    res.set('access-control-allow-origin', '*')
    res.set('access-control-allow-methods', '*')
    res.set('access-control-allow-headers', '*')
    res.type('json')
    next()
  })
  
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
}
