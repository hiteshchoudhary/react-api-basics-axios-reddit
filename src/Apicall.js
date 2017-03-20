import React, { Component } from 'react';
import axios from 'axios';


//https://www.reddit.com/r/space.json
class Apicall extends Component {

  componentWillMount(){
    this.getReddit();
  }

  getReddit(){
    axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
    .then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({posts});
    });
  }

  constructor(props){
    super(props);

    this.state = {
      posts:[],
      subr: 'space'
    };
    this.getReddit = this.getReddit.bind(this);
  }

  render(){
    return(
      <div>
        <h1>{`/r/${this.state.subr}`}</h1>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>{post.title}</li>
          )}
        </ul>

      </div>
    );
  }
}

export default Apicall;
