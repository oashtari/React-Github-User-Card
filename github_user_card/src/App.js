import React from 'react';
import './App.css';
import { render } from 'react-dom';
import UserCard from './Components/UserCard';
import FollowerCard from './Components/FollowerCard';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      followers: [],
      follower_info: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/oashtari')
      .then(response => response.json())
      .then(user => {
        this.setState({ user: user });
      })
      .catch(error => console.log('ERROR'));



    fetch('https://api.github.com/users/oashtari/followers')
      .then(response => response.json())
      .then(followers => {
        followers.map(follower => {
          fetch(follower.url)
            .then(res => res.json())
            .then(eachURL => {
              this.setState({ ...this.state, followers: [...this.state.followers, eachURL] });
            })
        })
      })

  }


  componentDidUpdate() {
    console.log('UPDATE', this.state);
  }

  render() {
    return (

      <div className="App" >
        < div className="primary_user" >
          <h3>This is Omid's card:</h3>
          <UserCard user={this.state.user} />

        </div>

        <div className="followers">
          <h3>These are his followers on GitHub:</h3>
          {this.state.followers.map(follower => (
            <FollowerCard follower={follower} />
          ))}
        </div>

      </div >
    )
  }
}


export default App;
