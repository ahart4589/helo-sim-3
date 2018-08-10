import React, {Component} from 'react'

export default class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      posts:[],
      search: '',
      userposts: true
    }
  }
  render (){
    return (
      <div>
        Search:
        <input onChange={() => this.state.search}/>
        { 
          this.state.posts.map((post, index) =>
        {
          return <div key={post.index}>
              <p>{post.title}</p>
              <p>{post.author}</p>
              <p>{post.img}</p>
            </div>
        })
      }
      
        <button>Search</button>
        <button>Reset</button>
      
      </div>
    )
  }
}