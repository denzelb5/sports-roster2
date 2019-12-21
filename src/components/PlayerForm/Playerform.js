import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
  }

  state = {
    playerName: '',
    playerImageUrl: '',
    playerPosition: '',
  }

  addPlayerEvent = (e) => {
    const { addPlayer } = this.props;
    e.preventDefault();
    const newPlayer = {
      name: this.state.playerName,
      imageUrl: this.state.playerImageUrl,
      postition: this.state.playerPosition,
    };
    addPlayer(newPlayer);
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ playerImageUrl: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ playerPosition: e.target.value });
  }

  render() {
    const { playerName, playerImageUrl, playerPosition } = this.state;

    return (
      <form className='col-6 offset-3 PinForm'>
          <div className="form-group">
            <label htmlFor="player-name">Player Name:</label>
            <input
              type="text"
              className="form-control"
              id="player-name"
              placeholder="player"
              value={playerName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="player-image-url">Player Image Url:</label>
            <input
              type="text"
              className="form-control"
              id="player-image-url"
              placeholder="https://www.google.com"
              value={playerImageUrl}
              onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="player-image-url">Player Image Url:</label>
            <input
              type="text"
              className="form-control"
              id="player-position"
              placeholder="https://www.google.com"
              value={playerPosition}
              onChange={this.playerPosition}
            />
          </div>
          <button className="btn btn-secondary" onClick={this.addPlayerEvent}>Add Player</button>
        </form>
    );
  }
}

export default PlayerForm;
