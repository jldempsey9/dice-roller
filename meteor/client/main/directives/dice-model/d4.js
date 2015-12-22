diceModelData.d4 = {
  createMesh: function (color) {
    var geometry = new THREE.TetrahedronGeometry(1,0);
    geometry.faceVertexUvs[0][0] = diceModelData.d4.Uvs.d1; // 10
    geometry.faceVertexUvs[0][1] = diceModelData.d4.Uvs.d2; // 8
    geometry.faceVertexUvs[0][2] = diceModelData.d4.Uvs.d3; // 20
    geometry.faceVertexUvs[0][3] = diceModelData.d4.Uvs.d4; // 2

    return new THREE.Mesh(
      geometry,
      new THREE.MeshLambertMaterial({
        color: color,
        shading: THREE.FlatShading,
        alphaMap: THREE.ImageUtils.loadTexture('/src/models/d4.png'),
        // wireframe: true
      })
    );
  },
  faceAngles: {
    1: {x: 30, y: 60, z: 0},
    2: {x: 30, y: -140, z: 0},
    3: {x: -30, y: -60, z: 0},
    4: {x: -40, y: 130, z: 0}
  },
  Uvs: {
    d1: [
      new THREE.Vector2(0.4, 0),
      new THREE.Vector2(0.2, 1),
      new THREE.Vector2(0, 0),
    ],
    d2: [
      new THREE.Vector2(0.4, 0),
      new THREE.Vector2(0.8, 0),
      new THREE.Vector2(0.6, 1)
    ],
    d3: [
      new THREE.Vector2(0.6, 1),
      new THREE.Vector2(0.8, 0),
      new THREE.Vector2(1, 1),

    ],
    d4: [
      new THREE.Vector2(0.6, 1),
      new THREE.Vector2(0.2, 1),
      new THREE.Vector2(0.4, 0),
    ]
  }
};
