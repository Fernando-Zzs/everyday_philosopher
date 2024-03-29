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
const position=[
  {x:70,y:70,z:70},
  {x:100,y:10,z:70},
  {x:-70,y:-70,z:-70},
  {x:-50,y:100,z:-47},
  {x:10,y:-50,z:110},
]
const oneWord_title="https://636c-cloud1-6gm7hn7636af92c5-1305725653.tcb.qcloud.la/sentence/oneWord.png?sign=41606dadbfbb68966d464526f8741ce0&t=1622363193"

Page({
  data: {
    show: true,
    //存放故事
    items:[
      {
        id:0,
        type:'story',
        title_url:"./image/title1.png",
        posterURL:""
      },
      {
        id:1,
        type:'oneWord',
        title_url:"https://636c-cloud1-6gm7hn7636af92c5-1305725653.tcb.qcloud.la/sentence/oneWord.png?sign=3c453f80b85371ceb2baf56c9a381326&t=1622361393",
        posterURL:"https://636c-cloud1-6gm7hn7636af92c5-1305725653.tcb.qcloud.la/sentence/20.png"
      },
      {
        id:2,
        type:'story',
        title_url:"./image/title1.png",
        posterURL:""
      },
      {
        id:3,
        type:'oneWord',
        title_url:"https://636c-cloud1-6gm7hn7636af92c5-1305725653.tcb.qcloud.la/sentence/oneWord.png?sign=3c453f80b85371ceb2baf56c9a381326&t=1622361393",
        posterURL:"https://636c-cloud1-6gm7hn7636af92c5-1305725653.tcb.qcloud.la/sentence/20.png"
      },
      {
        id:4,
        type:'oneWord',
        title_url:"https://636c-cloud1-6gm7hn7636af92c5-1305725653.tcb.qcloud.la/sentence/oneWord.png?sign=3c453f80b85371ceb2baf56c9a381326&t=1622361393",
        posterURL:"https://636c-cloud1-6gm7hn7636af92c5-1305725653.tcb.qcloud.la/sentence/20.png"
      }
    ],
    showNow:false,
    currentIndex:0,
    objects : []
  },
  onLoad: function () {
    console.log("select")
    wx.createSelectorQuery()
      .select('#webgl')
      .node()
      .exec((res) => {
        //获取故事和一句
       for(var i=0;i<5;i++){
       
         if(i==0){
         var id=app.recommand_story[app.recommand_story.length-1]
        //  this.data.items[i]={
        //   id:"5",
        //   type:'story',
        //   title_url:"https://636c-cloud1-6gm7hn7636af92c5-1305725653.tcb.qcloud.la/title/title1.png?sign=e799504b42a69b9c7914dc59080f0f8a&t=1622363137",
        //   posterURL:"cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/poster/宇宙之卵poster1.png"
        // }
        wx.cloud.callFunction({
          name: 'getStory',
          data: {
              story_id: '5'
          },
          complete: res => {
          
              console.log("story",res)
              this.data.items[0]={
                id:'5',
                type:'story',
                title_url:res.result.titleURL,
                posterURL:res.result.posterURL
              }
              this.setData({items:this.data.items})
                 this.renderModel1(canvas, THREE)
          }
      })
      }
        else{
          this.data.items[i]={
            id:i,
            type:'oneWOrd',
            title_url:oneWord_title,
            posterURL:"cloud://cloud1-6gm7hn7636af92c5.636c-cloud1-6gm7hn7636af92c5-1305725653/sentence/"+
             Math.floor((Math.random()*22+1)) +".png"
          }
        }
       }
       this.setData({items:this.data.items})   
       const canvas = res[0].node
      console.log("canvas",canvas)
      this.canvas = canvas
      const THREE = createScopedThreejs(canvas)
      // this.renderModel1(canvas, THREE)
      })
      
  },
  onReady:function(){
    this.timer = setInterval(() => {
      if (this.data.show) {
        this.setData({
          show: !this.data.show
        })
      }
    }, 3000)
  },
  onShow(){
    console.log(app.globalData.OPENID)

    if (typeof this.getTabBar === 'function' &&
    this.getTabBar()) {
    this.getTabBar().setData({
      selected: 1
    })
  }
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
    this.controls.minDistance=250
    this.controls.enablePan=false
    // this.controls.target=new THREE.Vector3( 0, 0, 0 );
    this.controls.update();
  },
  initObject() {
    var geometry = new this.THREE.IcosahedronGeometry(5);
    for(var i =0;i< this.data.items.length;i++){
      var material = new this.THREE.MeshPhongMaterial({
        side: this.THREE.DoubleSide,
      });
      var item=this.data.items[i]
      var hue = Math.random();
      var saturation = 1;
      var luminance = .5;
      material.color.setHSL(hue, saturation, luminance);

      var mesh = new this.THREE.Mesh(geometry, material);
      mesh.name = i
      mesh.position.set(position[i].x,position[i].y,position[i].z)
      this.scene.add(mesh);
      this.data.objects.push(mesh);

      console.log("url",item.title_url)
      var spriteMap = new this.THREE.TextureLoader().load(item.title_url);
      var spriteMaterial = new this.THREE.SpriteMaterial({
        map: spriteMap,
        color: 0xffffff
      });
      var sprite = new this.THREE.Sprite(spriteMaterial);
      sprite.name = i
      sprite.scale.set(70, 30, 1)
      sprite.position.set(position[i].x*1.1,position[i].y*1.1,position[i].z*1.1)
      this.scene.add(sprite);
    }
  },
  animate() {
    var dt = this.clock.getDelta();


    // if (resizeRendererToDisplaySize(renderer)) {
    //     const canvas = renderer.domElement;
    //     let { width, height } = canvas.getBoundingClientRect()
    //     // camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //     camera.aspect = width / height;
    //     camera.updateProjectionMatrix();
    // }

    this.data.objects.forEach((obj, ndx) => {
        const speed = 0.7;
        const rot = dt * speed;
        obj.rotation.x += rot;
        obj.rotation.y += rot;
    });

    if (this.mixer) this.mixer.update(dt);

    this.canvas.requestAnimationFrame(this.animate);
    this.controls.update()
    this.renderer.render(this.scene, this.camera);
  },
  touchStart(e) {
    this.canvas.dispatchTouchEvent({
      ...e,
      type: 'touchstart'
    })
  },
  touchMove(e) {
    this.canvas.dispatchTouchEvent({
      ...e,
      type: 'touchmove'
    })
  },
  touchEnd(e) {
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
      this.setData({
        currentIndex:intersects[0].object.name,
        showNow:true
      })

      
      
    }
  },
  onUnload:function(){
    clearInterval(this.timer)
  }
})