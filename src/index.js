/*
 * @Author: your name
 * @Date: 2022-01-10 17:03:38
 * @LastEditTime: 2024-09-18 17:18:47
 * @LastEditors: tanka 
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /pixi-demo/src/index.js
 */

class Base extends PIXI.Container{
  constructor(prop) {
    super(prop);
    this.canvas = document.createElement('canvas');
    this.canvas.style.width = '600px';
    this.canvas.style.height = '400px';
    this.init();
    this.addEq();
    this.addEq2();
    this.update()
  }
  init() {
    this.renderer = PIXI.autoDetectRenderer({
      width: 600,
      height: 400,
      view: this.canvas,
      // autoPreventDefault: false,
      // transparent: false,
      // antialias: false,
      // forceCanvas: true,
      // preserveDrawingBuffer: false
    })

    window.hs = this.renderer;

    var canvasContainer = document.querySelector('#canvas');

    canvasContainer.appendChild(this.renderer.view);
  }

  update() {
    requestAnimationFrame(this.update.bind(this))
    this.renderer.render(this);
  }

  addEq() {
    let circle = new PIXI.Graphics();
    circle.beginFill(0xFFF666);
    circle.drawCircle(0, 0, 10);
    circle.endFill();
    circle.x = 300;
    circle.y = 0;
    this.addChild(circle);
    this.renderer.render(this);
    this.circle = circle;
  }


  addEq2() {
    let circle = new PIXI.Graphics();
    circle.beginFill(0x666FFF);
    circle.drawCircle(0, 0, 10);
    circle.endFill();
    circle.x = 400;
    circle.y = 0;
    this.addChild(circle);
    this.renderer.render(this);
    this.circle2 = circle;
  }

}

const __main = new Base()
const circle = __main.circle;
const circle2 = __main.circle2;



// function update() {
//   requestAnimationFrame(update)
//   __main.renderer.render(__main)
// }

// update()



// let app = new PIXI.Application({width: 400, height: 400});

// document.body.appendChild(app.view);

// PIXI.loader
//   .add("../image/ta.png")
//   .load(setup);

// function setup(a, b) {
//   let container = new PIXI.Container();
//   window.san = new PIXI.Sprite(
//     PIXI.loader.resources["../image/ta.png"].texture
//   );
//   container.addChild(window.san)
//   window.container = container
//   app.stage.addChild(container)
// }



// let rectangle = new PIXI.Graphics();
// rectangle.lineStyle(10, 0xFF3300, 1, 1);
// rectangle.beginFill(0x66CCFF);
// rectangle.drawCircle(0, 0, 64);
// rectangle.endFill();
// rectangle.width = 128
// rectangle.height = 128
// rectangle.x = 100;
// rectangle.y = 100;
// app.stage.addChild(rectangle);

// let poly = new PIXI.Graphics();
// poly.lineStyle(4, 0xFF3300, 1);
// poly.beginFill(0x66CCFF);
// let arr = [
//   0, 0,
//   0, 100,
//   100, 200,
//   200, 200,
//   10,10,
//   0,0
// ]
// poly.drawPolygon(arr);
// poly.endFill();
// poly.x = 170;
// poly.y = 170;
// app.stage.addChild(poly);

