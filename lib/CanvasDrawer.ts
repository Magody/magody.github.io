export class CanvasDrawer {
  canvas: any;
  context: any;
  width: number;
  height: number;

  constructor(canvas: any) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    // console.log("Canvas debug", this.context, this.width, this.height)
  }

  aleatorio(inicio: number, fin: number): number {
    const rand: number = Math.random() * (fin + 0.99);
    return inicio + Math.floor(rand);
  }

  dibujarCuadrado(x: number, y: number, longitude: number, color: string) {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, longitude, longitude);
  }

  dibujarLinea(x1: number, y1: number, x2: number, y2: number, color: string) {
    this.context.beginPath(); // inicia el dibujo
    this.context.strokeStyle = color;
    this.context.linewidth = 10;

    this.context.moveTo(x1, y1);
    this.context.lineTo(x2, y2);
    this.context.stroke(); // dibuja el camino
    this.context.closePath(); // levanta el lapiz, termina
    // Importante: si no pongo el closePath la siguiente linea inicia desde el último punto
  }

  async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
