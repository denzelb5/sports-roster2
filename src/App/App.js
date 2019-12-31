import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import Navbar from '../components/Navbar/Navbar';
import Team from '../components/Team/Team';
import SinglePlayer from '../components/SinglePlayer/SinglePlayer';


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
    const { authed, selectedPlayer } = this.state;

    // const componentToRender = () => {
    //   if (authed && selectedPlayer === null) {
    //     return <Team setSinglePlayer={this.setSinglePlayer}/>;
    //   // eslint-disable-next-line no-else-return
    //   } else if (authed) {
    //     console.log('work?');
    //     return <SinglePlayer selectedPlayer={selectedPlayer}/>;
    //   }

    //   return <Auth />;
    // };

    return (
      <div className="App">
        <Navbar authed={authed} />
        <Team setSinglePlayer={this.setSinglePlayer}/>
        {/* {componentToRender()} */}
        {/* {
          if(authed && selectedPlayerId) {

          }
    (authed) ? () : (<Auth />)
        } */}
      </div>
    );
  }
}

export default App;
