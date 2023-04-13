// https://liquipedia.net/ageofempires/Category:Age_of_Empires_II_Maps

const images = require.context('./images', true, /\.png$/);

const maps = {
  maps: [
    {
      id: 1,
      name: 'Acropolis',
      creator: 'scripter64',
      type: 'Land',
      tcs: 1,
      walls: 'None',
      nomad: false,
      players: 8,
      created: 2011,
      image: images('./Acropolis_AoE2DE.png'),
    },
    {
      id: 2,
      name: 'African Clearing',
      creator: 'TBD',
      type: 'Land',
      tcs: 0,
      walls: 'None',
      nomad: true,
      players: 8,
      created: 2021,
      image: images('./African_Clearing_AoE2DE.png'),
    },
    {
      id: 3,
      name: 'Arabia',
      creator: 'Ensemble Studios',
      type: 'Land',
      tcs: 1,
      walls: 'None',
      nomad: false,
      players: 8,
      created: 1999,
      image: images('./Arabia_AoE2DE.png'),
    },
    {
      id: 4,
      name: 'Archipelago',
      creator: 'Ensemble Studios',
      type: 'Water',
      tcs: 1,
      walls: 'None',
      nomad: false,
      players: 8,
      created: 1999,
      image: images('./Archipelago_AoE2DE.png'),
    },
  ],
};
export default maps;
