// const { createScopedthis.THREEjs } = require('threejs-miniprogram')
import {
  createScopedThreejs
} from 'threejs-miniprogram'
import {
  registerGLTFLoader
} from './loaders/gltf-loader'
// import registerOrbit from "../miniprogram_npm/threejs-miniprogram/orbit"
import registerOrbit from "./orbit"


const app = getApp()

Page({
  data: {},
  onLoad: function () {
    wx.createSelectorQuery()
      .select('#webgl')
      .node()
      .exec((res) => {
        const canvas = res[0].node
        console.log(canvas)
        this.canvas = canvas
        const THREE = createScopedThreejs(canvas)

        // renderSphere(canvas, THREE)
        // renderCube(canvas, THREE)
        // renderCubes(canvas, THREE)
        this.renderModel1(canvas, THREE)
      })
  },
  renderModel1(canvas, THREE) {
    registerGLTFLoader(THREE)
    this.THREE = THREE;
    this.window = this.THREE.global;
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    var {
      container,
      stats,
      clock,
      gui,
      mixer,
      actions,
      activeAction,
      previousAction
    } = this;
    var {
      camera,
      scene,
      renderer,
      model,
      face,
      controls,
    } = this;
    this.init();
    this.animate();
    this.initObject();
  },
  init() {
    this.camera = new this.THREE.PerspectiveCamera(45, this.canvas.width / this.canvas.height, 1, 1000);
    this.camera.position.set(0, 0, 0); //-5,3,10
    this.camera.lookAt(new this.THREE.Vector3(0, 0, 0));
    this.scene = new this.THREE.Scene();
    // this.scene.background = new this.THREE.Color(0xe0e0e0);
    this.clock = new this.THREE.Clock();
    // lights
    var light = new this.THREE.HemisphereLight(0xffffff, 0x444444, 1);
    light.position.set(10, -10, -10); //0,20,0
    this.scene.add(light);

    var loader = new this.THREE.GLTFLoader();
    var model1;

    loader.load('https://636c-cloud1-6gm7hn7636af92c5-1305725653.tcb.qcloud.la/earth.glb', function (gltf) {
      // this.model = gltf.scene;
      model1 = gltf.scene;
      this.scene.add(model1);
    }.bind(this), undefined, function (e) {
      console.error(e);
    });
    this.renderer = new this.THREE.WebGLRenderer({
      antialias: true,
      alpha: true 
    });
    this.renderer.setPixelRatio(wx.getSystemInfoSync().pixelRatio);
    this.renderer.setSize(this.canvas.width, this.canvas.height);
    this.renderer.setClearAlpha(0.2);
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 1.5;

    const {
      OrbitControls
    } = registerOrbit(this.THREE)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.camera.position.set(300, 300, 300); //200,-200,-200
    this.controls.panSpeed=10
    this.controls.keyPanSpeed=15
    this.controls.maxDistance=700
    this.controls.minDistance=300
    // this.controls.target=new THREE.Vector3( 0, 0, 0 );
    this.controls.update();
  },
  initObject() {
    // var texture = this.THREE.ImageUtils.loadTexture('1.jpg');
  //   var texture = new this.THREE.TextureLoader().load("1.jpg");
  // var material1 = new this.THREE.MeshBasicMaterial({//设置texture纹理
  //     map: texture,
  //     material: 0.5,//透明度 取值0-1；
  //     transparent: true,//设置是否为透明
  // });

    var geometry = new this.THREE.IcosahedronGeometry(5);
    // var material = new this.THREE.MeshBasicMaterial({
    //   color: 0x3ca756,
    //   side: this.THREE.DoubleSide
    // });
    const material2 = new this.THREE.MeshPhongMaterial({
            side: this.THREE.DoubleSide,
        });

        const hue = Math.random();
        const saturation = 1;
        const luminance = .5;
        material2.color.setHSL(hue, saturation, luminance);
    var mesh = new this.THREE.Mesh(geometry, material2);
    mesh.name = 'plato'
    mesh.position.x = 70;
    mesh.position.y = 70;
    mesh.position.z = 70;
    this.scene.add(mesh);

//"https://636c-cloud1-6gm7hn7636af92c5-1305725653.tcb.qcloud.la/images/polato.png?sign=03df2825bac0d65ed059cc0b00dcc336&t=1622184129"
    var spriteMap = new this.THREE.TextureLoader().load("./polato.png");
    var spriteMaterial = new this.THREE.SpriteMaterial({
      map: spriteMap,
      color: 0xffffff
    });
    var sprite = new this.THREE.Sprite(spriteMaterial);
    sprite.name = 'plato_name'
    sprite.scale.set(30, 30, 20)
    sprite.position.x = 75;
    sprite.position.y = 75;
    sprite.position.z = 75;
    this.scene.add(sprite);

  //   var particleMaterial = new this.THREE.SpriteCanvasMaterial( {  
  //     color: 0x000000,
  //     program: function ( context ) {
  //         context.beginPath();
  //         context.font="bold 20px Arial";
  //         context.fillStyle="#058";
  //         context.fillText( 'a' , 0, 0 );
  //     }

  // } );

  // var particle = new this.THREE.Sprite( particleMaterial );
  // particle.position.x = 75;
  // particle.position.y = 75;
  // particle.position.z = 75;
  // this.scene.add( particle );

//   var texture = new this.THREE.CanvasTexture(getCanvasFont(111, 111, 'textvalue', '0xffffff','0x444444' ));
// var fontMesh = new this.THREE.Sprite(
// new this.THREE.SpriteMaterial({
// map: texture
// })
// )
// fontMesh.position.x = 80;
// fontMesh.position.y = 75;
// fontMesh.position.z = 75;
// this.scene.add( fontMesh );
  },
  animate() {
    var dt = this.clock.getDelta();
    if (this.mixer) this.mixer.update(dt);
    this.canvas.requestAnimationFrame(this.animate);
    this.controls.update()
    this.renderer.render(this.scene, this.camera);
  },
  touchStart1(e) {
    this.canvas.dispatchTouchEvent({
      ...e,
      type: 'touchstart'
    })
  },
  touchMove1(e) {
    this.canvas.dispatchTouchEvent({
      ...e,
      type: 'touchmove'
    })
  },
  touchEnd1(e) {
    this.canvas.dispatchTouchEvent({
      ...e,
      type: 'touchend'
    })
  },
  tap(e) {
    let touch = e.touches[0];
    // console.log(touch)

    this.mouse.x = (touch.pageX / this.canvas._width) * 2 - 1;
    this.mouse.y = -(touch.pageY / this.canvas._height) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    var intersects = this.raycaster.intersectObjects(this.scene.children);
    console.log(intersects, this.canvas._width, this.canvas._height, this.mouse.x, this.mouse.y, 'int')
    if (intersects.length > 0) {
      
      console.log(intersects[0].object.name, 'yes')
      

    }


  }
})