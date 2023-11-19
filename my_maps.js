/*
NOTA: AL FINAL DE CADA NIVEL, INICIA EL SIGUIENTE 
*/

const emojis = {
  '-': ' ',
  'O': '🧧',
  'X': '🎁',
  'I': '🎄',
  'PLAYER': '🎅',
  'BOMB_COLLISION': '🥶',
  'GAME_OVER': '😭',
  'WIN': '🥇',
  'HEART': '💛'
};

const maps = [];
maps.push(`
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  O--------I
`);
maps.push(`
  O-----XXXX
  XXXX--XXXX
  XX----XXXX
  X--XXXXXXX
  X--XX--XXX
  X--XXX-XXX
  XX--XX--XX
  XXX--XX-XX
  XXXX---IXX
  XXXXXXXXXX
  `);
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
