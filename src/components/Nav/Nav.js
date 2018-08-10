import React from 'react'
import {Link} from 'react-router-dom'
// import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

function Nav(props){
  // const {match, location, history} = this.props
  // console.log(location.pathname)
  console.log(props)
  return (
    // {location.pathname !== '/' 
    <div>
      {/* {this.props.location.pathname != '/' ?} */}
      <Link to='/dashboard'>
        <button>Home</button>
      </Link>
      <Link to='/new'>
        <button>New Post</button>
      </Link>
      <Link to='/'>
        <button>Logout</button>
      </Link>
    </div>
  )
}

function mapStateToProps(state) {
  const {username, profile} = state
  return {
    username: username,
    profile: profile
  }
}


export default connect(mapStateToProps)(Nav)
// withRouter