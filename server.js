const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();
const cors = require('cors');

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    req.headers["Access-Control-Allow-Headers"] = "*";
    req.headers["Access-Control-Allow-Origin"] = "*";
    return handle(req, res);
  });
  
  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
