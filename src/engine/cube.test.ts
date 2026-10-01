import { describe, it, expect } from 'vitest';
import { createSolvedCube } from './cube';

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