import React from 'react';
import './App.css';
import { render } from 'react-dom';
import UserCard from './Components/UserCard';
import FollowerCard from './Components/FollowerCard';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      followers: ''
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/oashtari')
      .then(response => response.json())
      .then(user => {
        // console.log('see user', user);
        this.setState({ user: user });
        console.log('state of user', this.state);
      })
      .catch(error => console.log('ERROR'));

    fetch('https://api.github.com/users/oashtari/followers')
      .then(response => response.json())
      .then(followers => {
        followers.forEach(follower => {
          fetch(follower.url)
            .then(eachURL => {
              console.log('urltest', eachURL.url);
            })
        }
        )
      })


    // .then(followers => {
    //   // console.log('followers', followers);
    //   this.setState({ followers: followers });
    //   console.log('state of follower', this.state.followers);
    // })
    //     .catch(error => console.log('ERROR'));


  }


  render() {
    console.log('card is rendering', this.state);
    return (

      <div className="App">

        <div className="primary_user">
          <h3>This is Omid's card:</h3>
          <UserCard user={this.state.user} />

        </div>

        <div className="followers">
          <h3>These are his followers on GitHub:</h3>
          <FollowerCard followers={this.state.followers} />
        </div>

      </div>
    )
  }
}


export default App;


// Class 
// -- for displaying my 

// Class
// -- for displaying my followers  

// User component
// -- me
// -- followers
// -- style it  

