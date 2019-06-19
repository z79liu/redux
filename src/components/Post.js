import React, { Component } from 'react'
//this component renders the list of posts
class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts : []
    }
  }
  //fetch to json place holder and then use its promise to set state
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({posts:data}))
  }

  render() {
    const post = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      
      <div>
        <h1>Hi welcome to my form</h1>
        {post}
      </div>
    )
  }
}

export default Post
