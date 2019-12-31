import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';
import playerShape from '../../helpers/propz/playerShape';

class PlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
    // playerToEdit: playerShape.playerShape,
    editMode: PropTypes.bool,
    // updatePlayer: PropTypes.func,
  }

  state = {
    playerName: '',
    playerImageUrl: '',
    playerPosition: '',
  }

  componentDidMount() {
    const { playerToEdit, editMode } = this.props;
    if (editMode) {
      this.setState({
        playerName: playerToEdit.name,
        playerImageUrl: playerToEdit.imageUrl,
        playerPosition: playerToEdit.position,
        uid: playerToEdit.uid,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.playerToEdit.id !== this.props.playerToEdit.id) && this.props.editMode) {
      this.setState(
        {
          playerName: this.props.playerToEdit.name,
          playerImageUrl: this.props.playerToEdit.imageUrl,
          playerPosition: this.props.playerToEdit.position,
        },
      );
    }
  }

  addPlayerEvent = (e) => {
    const { addPlayer } = this.props;
    e.preventDefault();
    const newPlayer = {
      name: this.state.playerName,
      imageUrl: this.state.playerImageUrl,
      postition: this.state.playerPosition,
      uid: authData.getUid(),
    };
    addPlayer(newPlayer);
    this.setState({ playerName: '', playerImageUrl: '', playerPosition: '' });
  }

  updatePlayerEvent = (e) => {
    e.preventDefault();
    const { updatePlayer, playerToEdit } = this.props;
    const updatedPlayer = {
      name: this.state.playerName,
      imageUrl: this.state.imageUrl,
      position: this.state.playerPosition,
      uid: playerToEdit.uid,
    };
    updatePlayer(playerToEdit.id, updatedPlayer);
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
    // const { playerName, playerImageUrl, playerPosition } = this.state;
    const { editMode } = this.props;

    return (
      <form className='col-6 offset-3 PinForm'>
          <div className="form-group">
            <label htmlFor="player-name">Player Name:</label>
            <input
              type="text"
              className="form-control"
              id="player-name"
              placeholder="player"
              value={this.state.playerName}
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
              value={this.state.playerImageUrl}
              onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="player-image-url">Player Image Url:</label>
            <input
              type="text"
              className="form-control"
              id="player-position"
              placeholder="Position"
              value={this.state.playerPosition}
              onChange={this.positionChange} />
          </div>
          {
           (editMode) ? (<button className="btn btn-warning" onClick={this.updatePlayerEvent}>Update Player</button>)
             : <button className="btn btn-secondary" onClick={this.addPlayerEvent}>Add Player</button>
          }
            </form>
    );
  }
}

export default PlayerForm;
