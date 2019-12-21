import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import Navbar from '../components/Navbar/Navbar';
import Team from '../components/Team/Team';


import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
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

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Navbar authed={authed} />
        {
    (authed) ? (<Team />) : (<Auth />)
        }
        {/* <Auth />
        <Team /> */}
      </div>
    );
  }
}

export default App;
