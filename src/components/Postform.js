import React, { Component } from 'react'

export class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.setState.body
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label><br />
            <input type="text" onChange={this.onChange} name="title" value={this.state.title} />
          </div>
          <div>
            <label>Body:</label><br />
            <textarea onChange={this.onChange} name="body" value={this.state.body} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Postform
