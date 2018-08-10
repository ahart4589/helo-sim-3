import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUserId, updateUsername, updateProfile} from '../../ducks/reducer'

class Auth extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

handleUsername = (e) => {
  this.setState({
    username: e.target.value
  })
}  
handlePassword = (e) => {
  console.log(e.target.value)
  this.setState({
    password: e.target.value
  })
}
updateUser = (user) => {
  this.setState({user})
}

addUser = () => {
  const {username, password} = this.state
  const newUser = {username, password}
  axios.post('/api/register',newUser).then(results => {
    this.updateUser(results.data)
  })
}
findUser = () => {
  const {username, password} = this.state
  const user = {username, password}
  axios.post('/api/login',user).then(results => {
    this.updateUser(results.data)
  })
}



  render (){
    return (
      <div>
        Username:
        <input value={this.state.username} onChange={this.handleUsername}/>
        <br/>
        Password:
        <input value={this.state.password} onChange={this.handlePassword}/>
        <br/>
        <Link to='/dashboard'>
          <button>Login</button>
        </Link>
        <Link to='/dashboard'>
          <button onClick={this.addUser}>Register</button>
        </Link>
      </div>
    )
  }
}

export default connect(null, {updateUserId, updateUsername, updateProfile}) (Auth)