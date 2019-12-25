import React from 'react';

import playerData from '../../helpers/data/playerData';
import Player from '../Players/Players';
import PlayerForm from '../PlayerForm/Playerform';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
    editMode: false,
    playerToEdit: {},
    showPlayerForm: false,
    selectedPlayerId: null,
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

  // setSinglePlayer = (selectedPlayerId) => {
  //   this.setState({ selectedPlayerId });
  // }

  addPlayerData = (newPlayer) => {
    playerData.addPlayer(newPlayer)
      .then(() => {
        this.getPlayerData(this.props);
      })
      .catch((errorFromAddPlayer) => console.error(errorFromAddPlayer));
  }

  updatePlayer = (playerId, updatedPlayer) => {
    playerData.updatePlayer(playerId, updatedPlayer)
      .then(() => {
        this.getPlayerData();
        this.setState({ editMode: false, showPlayerForm: false });
      })
      .catch((error) => console.error(error));
  }

  setEditMode = (editMode) => {
    this.setState({ editMode, showPlayerForm: true });
  }

  setPlayerToEdit = (player) => {
    this.setState({ playerToEdit: player });
  }

  setShowPlayerForm = () => {
    this.setState({ showPlayerForm: true });
  }

  render() {
    // const { players } = this.props;
    // const setSinglePlayer = this.props;

    return (
      <div id="team" className="d-flex flex-wrap">
       { < PlayerForm addPlayer={this.addPlayerData} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer} /> }
        {this.state.players.map((player) => (<Player key={player.id} player={player} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit} />))}
      </div>
    );
  }
}

export default Team;
