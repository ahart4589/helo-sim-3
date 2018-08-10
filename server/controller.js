module.exports = {
  addUser: (req, res) => {
    let db = req.app.get('db')
    let newUser = {username, password} = req.body
    let user = db.createUser(newUser)
    let createdUser = user[0]
    createdUser = req.session.userid
    res.send(createdUser)
  },
  getUser: (req, res) => {
    let db = req.app.get('db')
    let userInfo = {username, password}
    let user = db.getUser(userInfo)
    res.send(user)
  },
  getPosts:(req, res) => {
    let db = req.app.get('db')
    let posts = db.getPosts()
    res.send(posts)
  }
}