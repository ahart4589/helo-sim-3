const express = require ('express')
const bodyParser = require ('body-parser')
const massive = require ('massive')
require('dotenv').config()

const ctrl = require ('./controller')

const app = express ()
const PORT = 3029
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Really sailing now!')
})

app.post('/api/register', ctrl.addUser)
app.post('/api/login', ctrl.getUser)

app.listen(PORT, () => {
  console.log('well, Im sailing on port:', PORT)
})