import React from 'react';

import playerData from '../../helpers/data/playerData';
import Player from '../Players/Players';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    const { players } = this.state;
    this.getPlayerData(players);
  }

  getPlayerData = () => {
    playerData.getPlayers()
      .then((request) => {
        this.setState({ players: request });
      })
      .catch((errorFromGetPlayers) => console.error(errorFromGetPlayers));
  }

  render() {
    const { players } = this.state;

    return (
      <div id="team" className="d-flex flex-wrap">
        { players.map((player) => <Player key={player.id} player={player} />)}
      </div>
    );
  }
}

export default Team;
