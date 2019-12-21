import React from 'react';
import playerShape from '../../helpers/propz/playerShape';
import './Players.scss';


class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="card col-2" id="playerCard">
    <img src={player.imageUrl} className="card-img-top player-image" alt="..."/>
  <div className="card-body">
<h5 className="card-title">{player.name}</h5>
    <p className="card-text">Position: {player.position}</p>
  </div>
  </div>
    );
  }
}
export default Player;
