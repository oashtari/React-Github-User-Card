import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ''
    }
  }

  render() {
    console.log('card is rendering', this.state);
    return (

      <div className="App">

        <div className="primary_user">
          <h3>This is Omid's card:</h3>

        </div>

        <div className="followers">
          <h3>This are his followers on GitHub</h3>

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
// - name, location, bio, public_repo, followers, following
// -- me
// -- followers
// -- style it  

