// Kata 17 - Taxicab Geometry
// an algorithm to help taxicabs determine how far away a destination

// lets try again Nov 26 - forced logic in, could be refractored.
const blocksAway = function(directions) {
  let face = null;
  let pos = [0,0];
  // first step
  if (directions[0] === 'right') {
    pos[0] = directions[1];
    face = 'east';
  } else {
    pos[1] = directions[1];
    face = 'north';
  }
  // second step
  if (directions[2] === 'right') {
    pos[0] = directions[3];
    face = 'east'
  } else {
    pos[1] = directions[3];
    face = 'north'
  }
  for (let i = 4; i < directions.length; i++) {
    if(i % 2 === 0 && directions[i] === 'left') {
      if (face === 'north') {
        pos[0] -= directions[i+1];
        face = 'west';
      } else if (face === 'east') {
        pos[1] += directions[i+1];
        face = 'north';
      } else if (face === 'west') {
        pos[1] -= directions[i+1];
        face = 'south';
      } else if (face === 'south') {
        pos[0] += directions[i+1];
        face = 'east';
      }
    } else if (i % 2 === 0 && directions[i] === 'right') {
        if (face === 'north') {
          pos[0] += directions[i+1];
          face = 'east';
        } else if (face === 'east') {
          pos[1] -= directions[i+1];
          face = 'south';
        } else if (face === 'west') {
          pos[1] += directions[i+1];
          face = 'north';
        } else if (face === 'south') {
          pos[0] -= directions[i+1];
          face = 'west';
        }
      }
    }
  return (`{east: ${pos[0]}, north: ${pos[1]}}`);
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));