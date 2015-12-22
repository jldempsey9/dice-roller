
module.exports = 'app.directives.dice-model';

angular.module(module.exports, [])
.directive('diceModel', function () {
  return {
    scope: {
      color: '=?',
      diceModel: '=?model',
      value: '=?',
      rollTime: '=?'
    },
    controller: function ($scope, $element, $attrs) {
      $scope.animating = false;
    },
    link: function ($scope, $element, $attrs) {

      var addCamera = function () {
        $scope.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
        $scope.camera.setLens(35);
        $scope.camera.position.set(0,0,5);
      };

      var addLights = function () {
        var light = new THREE.PointLight(0x404040, 3);
        light.position.set(0,1,5);
        $scope.scene.add(light);
        $scope.scene.add(new THREE.AmbientLight(0x202020));
      };

      var addModel = function () {
        $scope.scene.remove($scope.dice);

        $scope.model = require('./d' + $scope.diceModel);
        $scope.dice = $scope.model.createMesh(stringToHex($scope.color));
        $scope.scene.add($scope.dice);

        window.dice = $scope.dice;
      };

      var stringToHex = function (string) {
        string = string.replace('#', '0x');
        return parseInt(string);
      };

      var animate = function () {
        window.requestAnimationFrame(function (time) {
          TWEEN.update(time);
          $scope.renderer.render($scope.scene, $scope.camera);

          if($scope.animating === true) {
            animate();
          }
        });
      };

      var showSide = function (side) {
        side = $scope.model.faceAngles[side];

        if (!$scope.animating) {
          $scope.animating = true;
          animate();
        }


        new TWEEN.Tween($scope.dice.rotation)
        .to({
          x: 2 * Math.PI,
          y: 2 * Math.PI,
          z: 2 * Math.PI
        }, 500)
        .easing(TWEEN.Easing.Cubic.In)
        .start()
        .onComplete(function () {
          new TWEEN.Tween($scope.dice.rotation)
          .to({
            x: THREE.Math.degToRad(side.x),
            y: THREE.Math.degToRad(side.y),
            z: THREE.Math.degToRad(side.z)
          }, 500)
          .easing(TWEEN.Easing.Cubic.Out)
          .onComplete(function () {
            $scope.animating = false;
          })
          .start();
        });
      };

      $scope.scene = new THREE.Scene();
      $scope.renderer = new THREE.WebGLRenderer({alpha: true});
      $scope.renderer.setSize(180, 180);


      addCamera();
      addLights();
      addModel();

      $element.append($scope.renderer.domElement);
      $scope.animating = true;
      animate();

      if ($scope.debug === true) {
        $(window).on('keyup', function (e) {
          switch(e.keyCode){
            case 37: // left
              $scope.dice.rotation.y += THREE.Math.degToRad(6);
            break;
            case 39: // right
              $scope.dice.rotation.y -= THREE.Math.degToRad(6);
            break;
            case 38: // up
              $scope.dice.rotation.x -= THREE.Math.degToRad(6);
            break;
            case 40: // down
              $scope.dice.rotation.x += THREE.Math.degToRad(6);
            break;
          }

          // $scope.dice.rotation.z = 90 * (Math.PI/180);

          console.log({
            x: $scope.dice.rotation.x * (180/Math.PI),
            y: $scope.dice.rotation.y * (180/Math.PI),
            z: $scope.dice.rotation.z * (180/Math.PI),
          });
        });
      }

      $scope.$watch('diceModel', function (newValue, oldValue) {
        if (typeof newValue === 'undefined') {
          return;
        }

        addModel();
        animate();
      });

      $scope.$watch('color', function (newValue, oldValue) {
        if (typeof newValue === 'undefined') {
          return;
        }

        addModel();
        animate();
      });

      $scope.$watch('value', function (newValue, oldValue) {
        if (typeof newValue === 'undefined') {
          return;
        }

        showSide(newValue);
      });

      $scope.$watch('rollTime', function (newValue, oldValue) {
        if (typeof newValue === 'undefined') {
          return;
        }
        console.log(newValue);
        showSide($scope.value);
      });
    }
  };
});
