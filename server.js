const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 8080
const app = next(true)
const handle = app.getRequestHandler()
const mercadopago = require('mercadopago');
var bodyParser = require('body-parser')

require('dotenv').config;

app.prepare().then(() => {
  const server = express();
  var jsonParser = bodyParser.json()

  server.post('/api/payments/mercado_preference', jsonParser, (req,  res) => {
        try {
          mercadopago.configure({
            access_token: process.env.MERCADOPAGO_CLIENT_ID
            });
            let preference = {
            items: [
                {
                title: req.body.name,
                unit_price: parseInt(req.body.price),
                quantity: 1,
                }
            ]
        };
    
        mercadopago.preferences.create(preference)
            .then(response => {
            res.send({preferenceId: response.body.init_point.split('pref_id=')[1]});
            })
            .catch(error => {
            console.log(error);
            res.status(403).send(error);
            });
        } catch (error) {
          console.log(error);
        }
    })


  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})