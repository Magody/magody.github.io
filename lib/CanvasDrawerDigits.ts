import { CanvasDrawer } from './CanvasDrawer';

export class CanvasDrawerDigits extends CanvasDrawer {
  dom: HTMLDocument;
  color_edge: string;

  pos = { x: -1, y: -1 };

  constructor(
    canvas: HTMLCanvasElement,
    dom: HTMLDocument
  ) {
    super(canvas);

    this.dom = dom;

    this.color_edge = 'blue';

    this.init();
  }

  setPosition(pageX:number, pageY:number){
    
    let canvasX = this.canvas.offsetLeft;
    let canvasY = this.canvas.offsetTop;

    this.pos.x = pageX - canvasX;
    this.pos.y = pageY - canvasY;

    // console.log("set", this.pos.x, this.pos.y, this.context);

  }

  move(pageX:number, pageY:number) {

    
    this.context.beginPath(); // begin
    
    this.context.lineWidth = 30
    this.context.lineCap = 'round';
    this.context.strokeStyle = '#111111';
    if(this.pos.x == -1 && this.pos.y == -1){
      this.setPosition(pageX, pageY);
    }
    this.context.moveTo(this.pos.x, this.pos.y);
    this.setPosition(pageX, pageY);
    this.context.lineTo(this.pos.x, this.pos.y);

    this.context.stroke();
    this.context.closePath();
  }

  onResize(e:any) {
    
  }

  init() {
    
  }

  getImageData(): ImageData{
    const scaled = this.context.drawImage(this.canvas, 0, 0, 28, 28);
    return this.context.getImageData(0, 0, 28, 28);
  }

  clear() {
    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }
}