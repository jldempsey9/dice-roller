diceModelData.d20 = {
  createMesh: function (color) {
    var geometry = new THREE.IcosahedronGeometry(1,0);
    geometry.faceVertexUvs[0][0] = diceModelData.d20.Uvs.d10; // 10
    geometry.faceVertexUvs[0][1] = diceModelData.d20.Uvs.d8; // 8
    geometry.faceVertexUvs[0][2] = diceModelData.d20.Uvs.d20; // 20
    geometry.faceVertexUvs[0][3] = diceModelData.d20.Uvs.d2; // 2
    geometry.faceVertexUvs[0][4] = diceModelData.d20.Uvs.d12; // 12
    geometry.faceVertexUvs[0][5] = diceModelData.d20.Uvs.d16; // 16
    geometry.faceVertexUvs[0][6] = diceModelData.d20.Uvs.d17; // 17
    geometry.faceVertexUvs[0][7] = diceModelData.d20.Uvs.d15; // 15
    geometry.faceVertexUvs[0][8] = diceModelData.d20.Uvs.d18; // 18
    geometry.faceVertexUvs[0][9] = diceModelData.d20.Uvs.d14; // 14
    geometry.faceVertexUvs[0][10] = diceModelData.d20.Uvs.d19; //19
    geometry.faceVertexUvs[0][11] = diceModelData.d20.Uvs.d1; // 1
    geometry.faceVertexUvs[0][12] = diceModelData.d20.Uvs.d13; //13
    geometry.faceVertexUvs[0][13] = diceModelData.d20.Uvs.d11; // 11
    geometry.faceVertexUvs[0][14] = diceModelData.d20.Uvs.d9; // 9
    geometry.faceVertexUvs[0][15] = diceModelData.d20.Uvs.d3; // 3
    geometry.faceVertexUvs[0][16] = diceModelData.d20.Uvs.d7; // 7
    geometry.faceVertexUvs[0][17] = diceModelData.d20.Uvs.d5; // 5
    geometry.faceVertexUvs[0][18] = diceModelData.d20.Uvs.d4; // 4
    geometry.faceVertexUvs[0][19] = diceModelData.d20.Uvs.d6; // 6

    return new THREE.Mesh(
      geometry,
      new THREE.MeshLambertMaterial({
        color: color,
        shading: THREE.FlatShading,
        alphaMap: THREE.ImageUtils.loadTexture('/src/models/d20-2.png'),
        // wireframe: true
      })
    );
  },
  faceAngles: {
    1: {x: -60, y: 0, z: 0},
    2: {x: 145, y: -45, z: 0},
    3: {x: 0, y: -20, z: 0},
    4: {x: -175, y: 20, z: 0},
    5: {x: -30, y: 130, z: 0},
    6: {x: 20, y: -90, z: 0},
    7: {x: -30, y: 45, z: 0},
    8: {x: 110, y: 180, z: 0},
    9: {x: -25, y: -90, z: 0},
    10: {x: 145, y: -130, z: 0},
    11: {x: -35, y: -135, z: 0},
    12: {x: -205, y: -90, z: 0},
    13: {x: -70, y: 180, z: 0},
    14: {x: -215, y: 45, z: 0},
    15: {x: -35, y: 90, z: 0},
    16: {x: 140, y: 135, z: 0},
    17: {x: -5, y: 20, z: 0},
    18: {x: 170, y: -25, z: 0},
    19: {x: 315, y: -45, z: 0},
    20: {x: 115, y: 0, z: 0}
  },
  Uvs: {
    d1: [
      new THREE.Vector2(0.05, 1),
      new THREE.Vector2(0, 0),
      new THREE.Vector2(0.1, 0)
    ],
    d2: [
      new THREE.Vector2(0.2, 0),
      new THREE.Vector2(0.15, 1),
      new THREE.Vector2(0.1, 0)
    ],
    d3: [
      new THREE.Vector2(0.3, 0),
      new THREE.Vector2(0.25, 1),
      new THREE.Vector2(0.2, 0),
    ],
    d4: [
      new THREE.Vector2(0.35, 1),
      new THREE.Vector2(0.3, 0),
      new THREE.Vector2(0.4, 0),
    ],
    d5: [
      new THREE.Vector2(0.5, 0),
      new THREE.Vector2(0.45, 1),
      new THREE.Vector2(0.4, 0),
    ],
    d6: [
      new THREE.Vector2(0.5, 0),
      new THREE.Vector2(0.6, 0),
      new THREE.Vector2(0.55, 1),
    ],
    d7: [
      new THREE.Vector2(0.7, 0),
      new THREE.Vector2(0.65, 1),
      new THREE.Vector2(0.6, 0),
    ],
    d8: [
      new THREE.Vector2(0.75, 1),
      new THREE.Vector2(0.7, 0),
      new THREE.Vector2(0.8, 0)
    ],
    d9: [
      new THREE.Vector2(0.85, 1),
      new THREE.Vector2(0.8, 0),
      new THREE.Vector2(0.9, 0),
    ],
    d10: [
      new THREE.Vector2(0.95, 1),
      new THREE.Vector2(0.9, 0),
      new THREE.Vector2(1, 0),
    ],
    d11: [
      new THREE.Vector2(0.95, 1),
      new THREE.Vector2(0.975, 0.5),
      new THREE.Vector2(1, 1),
    ],
    d12: [
      new THREE.Vector2(0.85, 1),
      new THREE.Vector2(0.9, 0),
      new THREE.Vector2(0.95, 1),
    ],
    d13: [
      new THREE.Vector2(0.75, 1),
      new THREE.Vector2(0.8, 0),
      new THREE.Vector2(0.85, 1),
    ],
    d14: [
      new THREE.Vector2(0.65, 1),
      new THREE.Vector2(0.7, 0),
      new THREE.Vector2(0.75, 1)
    ],
    d15: [
      new THREE.Vector2(0.6, 0),
      new THREE.Vector2(0.65, 1),
      new THREE.Vector2(0.55, 1),
    ],
    d16: [

      new THREE.Vector2(0.45, 1),
      new THREE.Vector2(0.5, 0),
      new THREE.Vector2(0.55, 1),
    ],
    d17: [
      new THREE.Vector2(0.45, 1),
      new THREE.Vector2(0.35, 1),
      new THREE.Vector2(0.4, 0),
    ],
    d18: [
      new THREE.Vector2(0.25, 1),
      new THREE.Vector2(0.3, 0),
      new THREE.Vector2(0.35, 1),
    ],
    d19: [

      new THREE.Vector2(0.2, 0),
      new THREE.Vector2(0.25, 1),
      new THREE.Vector2(0.15, 1),
    ],
    d20: [
      new THREE.Vector2(0.05, 1),
      new THREE.Vector2(0.1, 0),
      new THREE.Vector2(0.15, 1)
    ]
  }
};
