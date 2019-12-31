// import React from 'react';
// import PropTypes from 'prop-types';

// class SinglePlayer extends React.Component {
//   static propTypes = {
//     setSinglePlayer: PropTypes.func,
//   }

//   selectedPlayer = (e) => {
//     e.preventDefault();
//     const { setSinglePlayer, player } = this.props;
//     setSinglePlayer(player.id);
//   }

//   render() {
//     const { player } = this.props;
//     return (
//       <div className="card col-2" id="playerCard">
//         <img src={player.imageUrl} className="card-img-top player-image" alt="..."/>
//         <div className="card-body">
//           <h5 className="card-title">{player.name}</h5>
//           <p className="card-text">Position: {player.position}</p>
//         </div>
//         </div>
//     );
//   }
// }

// export default SinglePlayer;
