import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json`)
    .then((result) => {
      const playerObject = result.data;
      const players = [];
      Object.keys(playerObject).forEach((fbId) => {
        playerObject[fbId].id = fbId;
        players.push(playerObject[fbId]);
      });
      resolve(players);
    })
    .catch((error) => reject(error));
});

export default { getPlayers };
