import { describe, it, expect } from 'vitest';
import { createSolvedCube, rotateVec} from './cube';

it('debug: count per color', () => {
  const cube = createSolvedCube();
  for (const color of ['W', 'Y', 'G', 'B', 'R', 'O']) {
    console.log(color, cube.filter(s => s.color === color).length);
  }
});

describe('createSolvedCube', () => {
  it('has 54 stickers', () => {
    expect(createSolvedCube().length).toBe(54);
  });
});


describe('rotateVec', () => {
  it('rotates front to bottom around x', () => {
    expect(rotateVec({ x: 0, y: 0, z: 1 }, 'x', 1)).toEqual({ x: 0, y: -1, z: 0 });
  });

  // TODO: rotating front (0,0,1) around y once should give right (1,0,0)
  it('rotates front around y', () => {
    expect(rotateVec({x:0, y: 0, z: 1 }, 'y', 1)).toEqual({x: 1, y: 0, z: 0 })
  });

  // TODO: rotating right (1,0,0) around z once should give top (0,1,0)
  it('rotates right around y', () => {
    expect(rotateVec({x:1, y: 0, z: 0 }, 'z', 1)).toEqual({x: 0, y: 1, z: 0 })
  });
});