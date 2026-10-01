export type Vec3 = { x: number; y: number; z: number };
export type Color = 'W' | 'Y' | 'G' | 'B' | 'R' | 'O';

export interface Sticker {
  pos: Vec3;
  normal: Vec3;
  color: Color;
}

// White on top, green in front, red on the right
// x points right, y points up, z points toward you (the front)
export const FACE_COLORS: { normal: Vec3; color: Color }[] = [
  { normal: { x: 0, y: 1, z: 0 }, color: 'W' },   // U
  { normal: { x: 0, y: -1, z: 0 }, color: 'Y' },  // D
  { normal: { x: 0, y: 0, z: 1 }, color: 'G' },   // F
  { normal: { x: 0, y: 0, z: -1 }, color: 'B' },  // B
  { normal: { x: 1, y: 0, z: 0 }, color: 'R' },   // R
  { normal: { x: -1, y: 0, z: 0 }, color: 'O' },  // L
];

export function createSolvedCube(): Sticker[] {
    const stickers: Sticker[] = [];
    for (const face of FACE_COLORS){
        for (let x = -1; x<= 1; x++){
            for(let y = -1; y<= 1; y++){
                for(let z = -1; z<= 1; z++){
                    const pos = {x, y, z};

                    const onFace = 
                        (face.normal.x !== 0 && pos.x === face.normal.x) || 
                        (face.normal.y !== 0 && pos.y === face.normal.y) ||
                        (face.normal.z !== 0 && pos.z === face.normal.z);
                    
                    if (onFace){
                        stickers.push({
                            pos,
                            normal: { ...face.normal},
                            color: face.color,
                        });
                    }
                }
            }
        }
    }

    return stickers;
}

export type Axis = 'x' | 'y' | 'z';

export function rotateVec(v: Vec3, axis: Axis, turns: number): Vec3{
    const n = ((turns % 4) + 4) % 4;

    let {x, y, z} = v;
    for ( let i = 0 ; i < n; i++){
        if (axis === 'x'){
            [y,z] = [-z, y];
        }else if (axis === 'y'){
            [x,z] = [z,-x];
        }else {
            [x,y] = [-y,x];
        }
    }
    return {x: x + 0, y: y + 0, z: z + 0};
}