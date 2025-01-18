"use client";
import React, { useEffect, useRef, useState } from 'react';
import { CanvasDrawerGameLife } from '@/lib/CanvasDrawerGameLife';
import styles from './GameOfLife.module.css';

let drawer: CanvasDrawerGameLife;

const GameOfLife = () => {
  const refGenerationFeedback = useRef<HTMLDivElement>(null);
  const [generations, setGenerations] = useState(200);
  const [duration, setDuration] = useState(100);

  useEffect(() => {
    const canvas: any | null = document.getElementById('dibujito');
    canvas.width = window.innerWidth - 50;
    canvas.height = window.innerHeight * 0.6;

    if (canvas !== null) {
      drawer = new CanvasDrawerGameLife(canvas, document, generations, duration);

      document.addEventListener('mousedown', mouseDown);
      document.addEventListener('mouseup', mouseUp);
    }
  }, []);

  const handlerBegin = () => {
    if (generations < 1 || duration < 0) return;
    drawer?.beginSimulation(refGenerationFeedback.current);
  };

  const mouseDown = (event: MouseEvent) => {
    const rect = drawer.canvas.getBoundingClientRect();
    const scaleX = drawer.canvas.width / rect.width; // Relación de escala horizontal
    const scaleY = drawer.canvas.height / rect.height; // Relación de escala vertical
  
    const relativeX = (event.clientX - rect.left) * scaleX; // Ajusta por la escala
    const relativeY = (event.clientY - rect.top) * scaleY; // Ajusta por la escala
  
    if (drawer.tryToDrawCell(relativeX, relativeY)) {
      document.addEventListener("mousemove", dibujarMouse);
    }
  };
  

  const mouseUp = () => {
    document.removeEventListener('mousemove', dibujarMouse);
  };

  const dibujarMouse = (event: MouseEvent) => {
    const rect = drawer.canvas.getBoundingClientRect();
    const scaleX = drawer.canvas.width / rect.width;
    const scaleY = drawer.canvas.height / rect.height;
  
    const relativeX = (event.clientX - rect.left) * scaleX;
    const relativeY = (event.clientY - rect.top) * scaleY;
  
    drawer.tryToDrawCell(relativeX, relativeY);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>The Game of Life: The game with 0 players</h1>
      <p>Click the black space to enlarge cells; hold down (mouse) to add faster. Adjust anytime, even during a run. Use sliders to set generations and duration. Click Start when ready!</p>
      <canvas id="dibujito" className={styles.canvas}></canvas>
      <div ref={refGenerationFeedback}></div>
      <div className="slider-container">
        <div className={styles.slider}>
          <label>Generations: {generations}</label>
          <input
            type="range"
            min="5"
            max="500"
            step="5"
            value={generations}
            onChange={(e) => setGenerations(Number(e.target.value))}
          />
        </div>
        <div className={styles.slider}>
          <label>Duration: {duration} ms</label>
          <input
            type="range"
            min="50"
            max="1000"
            step="50"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="button-group">
        <button className={styles.btn} onClick={handlerBegin}>
          Start
        </button>
        <button className={styles.btn} onClick={() => drawer?.cleanSpace()}>
          Clean Up
        </button>
        <button className={styles.btn} onClick={() => drawer?.resetWorld()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default GameOfLife;
