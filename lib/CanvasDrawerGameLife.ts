import { CanvasDrawer } from './CanvasDrawer';

export class CanvasDrawerGameLife extends CanvasDrawer {
  dom: HTMLDocument;
  lado_celula: number;
  columnas: number;
  filas: number;
  color_celula_viva: string;
  color_celula_muerta: string;
  color_borde: string;
  reset: boolean;

  generations: number;
  duration: number;

  celulas: any = [];

  constructor(
    canvas: HTMLCanvasElement,
    dom: HTMLDocument,
    generations: number,
    duration: number,
  ) {
    super(canvas);

    this.dom = dom;

    this.reset = false;
    this.generations = generations;
    this.duration = duration;

    this.lado_celula = 10;
    this.columnas = Math.floor(this.width / this.lado_celula);
    this.filas = Math.floor(this.height / this.lado_celula);

    this.color_celula_viva = 'green';
    this.color_celula_muerta = 'black';
    this.color_borde = 'red';
    this.init();
  }

  init() {
    this.celulas = [];
    for (let f = 0; f < this.filas; f++) {
      var fila = [];
      for (let c = 0; c < this.columnas; c++) {
        if (c == 0 || f == 0 || c == this.columnas - 1 || f == this.filas - 1) {
          fila.push(-1);
          continue;
        }

        let celula = this.aleatorio(0, 10); //fuerzo las muertas 10 veces más que la s vivas
        //console.log(celula)
        if (celula == 0) {
          fila.push(1);
        } else {
          fila.push(0);
        }
      }
      this.celulas.push(fila);
    }

    this.dibujarMatrizCelulas();
  }

  setGenerations(generations: number) {
    this.generations = generations;
  }

  setDuration(duration: number) {
    this.duration = duration;
  }

  tryToDrawCell(x: number, y: number) {
    const columna_pulsada = Math.floor(x / this.lado_celula);
    const fila_pulsada = Math.floor(y / this.lado_celula);
  
    const wasValidClick =
      columna_pulsada >= 0 &&
      columna_pulsada < this.columnas &&
      fila_pulsada >= 0 &&
      fila_pulsada < this.filas;
  
    if (wasValidClick) {
      this.celulas[fila_pulsada][columna_pulsada] = 1;
      this.dibujarCelula(fila_pulsada, columna_pulsada, this.color_celula_viva);
    }
    return wasValidClick;
  }

  dibujarMatrizCelulas() {
    const matriz = this.celulas;
    for (var f = 0; f < this.filas; f++) {
      for (var c = 0; c < this.columnas; c++) {
        if (matriz[f][c] == 0) {
          this.dibujarCelula(f, c, this.color_celula_muerta);
        } else if (matriz[f][c] == 1) {
          this.dibujarCelula(f, c, this.color_celula_viva);
        } else {
          this.dibujarCelula(f, c, this.color_borde);
        }
      }
    }
  }

  obtenerNuevaGeneracion(this: CanvasDrawerGameLife, matriz: any) {
    const valorCelVivas = 1;
    const valorCelMuertas = 0;
    const matrizCopia = [];

    for (var i = 0; i < this.filas; i++) {
      var arreglo_copia = [];
      for (var j = 0; j < this.columnas; j++) {
        arreglo_copia.push(matriz[i][j]);
      }
      matrizCopia.push(arreglo_copia);
    }

    var vecinos = 0;

    for (var i = 1; i < this.filas - 1; i++) {
      for (var j = 1; j < this.columnas - 1; j++) {
        var posiciones = [
          [i - 1, j],
          [i - 1, j + 1],
          [i, j + 1],
          [i + 1, j + 1],
          [i + 1, j],
          [i + 1, j - 1],
          [i, j - 1],
          [i - 1, j - 1],
        ];

        //cuenta los vecinos
        for (var k = 0; k < 8; k++)
          if (matriz[posiciones[k][0]][posiciones[k][1]] == valorCelVivas)
            vecinos++;

        if (
          (vecinos == 3 && matriz[i][j] == valorCelMuertas) ||
          ((vecinos == 2 || vecinos == 3) && matriz[i][j] == valorCelVivas)
        )
          matrizCopia[i][j] = valorCelVivas;

        if ((vecinos < 2 || vecinos > 3) && matriz[i][j] == valorCelVivas)
          matrizCopia[i][j] = valorCelMuertas;
        vecinos = 0;
      }
    }

    return matrizCopia;
  }

  dibujarCelula(
    this: CanvasDrawerGameLife,
    fila: number,
    columna: number,
    color: string,
  ) {
    this.dibujarCuadrado(
      columna * this.lado_celula,
      fila * this.lado_celula,
      this.lado_celula,
      color,
    );
  }

  async beginSimulation(feedbackElement: any) {
    this.reset = false;

    for (var generacion = 1; generacion <= this.generations; generacion++) {
      feedbackElement.innerHTML = 'Generation: ' + generacion;

      this.celulas = this.obtenerNuevaGeneracion(this.celulas);

      this.dibujarMatrizCelulas();
      await this.sleep(this.duration);

      if (this.reset) {
        feedbackElement.innerHTML =
          '¿0 players?, but now you are playing with this...';
        break;
      } else if (generacion == this.generations) {
        feedbackElement.innerHTML =
          'Apocalipsis. Executed: ' + generacion + ' generations';
      }
    }
  }

  resetWorld() {
    this.reset = true;
    this.cleanSpace();
    this.init();
  }

  cleanSpace() {
    this.context.fillStyle = this.color_borde;

    this.context.fillRect(0, 0, this.width, this.lado_celula);
    this.context.fillRect(
      0,
      this.lado_celula,
      this.lado_celula,
      this.height - this.lado_celula,
    );
    this.context.fillRect(
      0,
      this.height - this.lado_celula,
      this.width,
      this.lado_celula,
    );
    this.context.fillRect(
      this.width - this.lado_celula,
      0,
      this.lado_celula,
      this.height,
    );

    this.context.fillStyle = this.color_celula_muerta;
    this.context.fillRect(
      this.lado_celula,
      this.lado_celula,
      this.width - this.lado_celula * 2,
      this.height - this.lado_celula * 2,
    );

    this.celulas = [];
    for (var f = 0; f < this.filas; f++) {
      var fila = [];
      for (var c = 0; c < this.columnas; c++) {
        if (c == 0 || f == 0 || c == this.columnas - 1 || f == this.filas - 1) {
          fila.push(-1);
          continue;
        }
        fila.push(0);
      }
      this.celulas.push(fila);
    }
  }
}
