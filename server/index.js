const express = require ('express')
const bodyParser = require ('body-parser')
const massive = require ('massive')
const session = require ('express-session')
require('dotenv').config()
const path = require ('path')

const ctrl = require ('./controller')

const app = express ()
const PORT = 3029
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Really sailing now!')
})

app.use(session({
  secret:process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false
}))

app.use(express.static(`${__dirname}/../build`))

app.post('/api/register', ctrl.addUser)
app.post('/api/login', ctrl.getUser)

app.get('/api/posts/:id', ctrl.getPosts)

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log('well, Im sailing on port:', PORT)
})