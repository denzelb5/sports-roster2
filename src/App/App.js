import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import Navbar from '../components/Navbar/Navbar';
import Team from '../components/Team/Team';
import Player from '../components/Players/Players';


import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
    selectedPlayerId: null,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  setSinglePlayer = (selectedPlayerId) => {
    this.setState({ selectedPlayerId });
  }

  render() {
    const { authed, selectedPlayerId } = this.state;
    return (
      <div className="App">
        <Navbar authed={authed} />
        {
    (authed) ? (<Team setSinglePlayer={this.setSinglePlayer}/>) : (<Auth />)
        }
        {
          (selectedPlayerId) && (<Player selectedPlayerId={selectedPlayerId} />)
        }
      </div>
    );
  }
}

export default App;
