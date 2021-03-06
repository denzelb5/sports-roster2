import React from 'react';
import PropTypes from 'prop-types';
import './Players.scss';


class Player extends React.Component {
  static propTypes = {
    setSinglePlayer: PropTypes.func,
    setEditMode: PropTypes.func,
    setPlayerToEdit: PropTypes.func,
    deleteSinglePlayer: PropTypes.func,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePlayer, player } = this.props;
    deleteSinglePlayer(player.id);
  }

  setSelectedPlayerId = (e) => {
    e.preventDefault();
    const { setSinglePlayer, player } = this.props;
    setSinglePlayer(player.id);
  }

  setEditMode = (e) => {
    e.preventDefault();
    this.props.setEditMode(true);
    this.props.setPlayerToEdit(this.props.player);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="card col-2" id="playerCard">
    <img src={player.imageUrl} className="card-img-top player-image" alt="..."/>
  <div className="card-body">
<h5 className="card-title">{player.name}</h5>
    <p className="card-text">Position: {player.position}</p>
    {/* <button className="btn btn-primary" onClick={this.setSelectedPlayerId}>View Player</button> */}
    <button className="btn btn-primary" onClick={this.setEditMode}>Edit</button>
    <button className="btn btn-danger" onClick={this.deletePlayerEvent}>Delete</button>
  </div>
  </div>
    );
  }
}
export default Player;
