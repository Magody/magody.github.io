"use client";
import { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import styles from './DigitsRecognition.module.css';
import { CanvasDrawerDigits } from '@/lib/CanvasDrawerDigits';

const prefix = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/projects/machine_learning/DigitsRecognition`;

const DigitsRecognition = () => {
  const [predictionText, setPredictionText] = useState('Loading the model...');
  const [drawer, setDrawer] = useState<any>(null);
  const [modelDigits, setModelDigits] = useState<any>(null);
  const [predictions, setPredictions] = useState<number[]>([]);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const model = await tf.loadLayersModel(`${prefix}/model.json`);
        setModelDigits(model);
        tf.setBackend('cpu');
        setPredictionText('Model loaded and ready to predict!');
      } catch (error) {
        console.error('Error loading model:', error);
        setPredictionText('Error loading model');
      }
    };

    loadModel();
  }, []);

  useEffect(() => {
    if (modelDigits) {
      const canvas = document.getElementById('draw') as HTMLCanvasElement;
      setDrawer(new CanvasDrawerDigits(canvas, document));
    }
  }, [modelDigits]);

  const valid = () => drawer && modelDigits;

  const modelDigitsPredict = (imageData: ImageData) => {
    const imgTensor = tf.browser.fromPixels(imageData, 1)
      .reshape([1, 28, 28, 1])
      .cast('float32');

    const output = tf.tidy(() => {
      const predictions = modelDigits.predict(imgTensor).dataSync();
      return Array.from(predictions).map((p: any) => Math.round(p * 100));
    });

    return output;
  };

  const mouseUp = () => {
    if (!valid()) return;
    const imageData = drawer.getImageData();
    setPredictionText('Processing image...');
    const predictions = modelDigitsPredict(imageData);
    setPredictions(predictions);
    setPredictionText('Prediction completed!');
    drawer.pos.x = -1;
    drawer.pos.y = -1;
  };

  const mouseMove = (event: any) => {
    if (!valid()) return;
    if (event.buttons !== 1) return;
    drawer.move(event.pageX, event.pageY);
  };

  const touchMove = (event: any) => {
    if (!valid()) return;
    const touch = event.touches[0];
    drawer.move(touch.pageX, touch.pageY);
  };

  const resetCanvas = () => {
    if (!valid()) return;
    drawer.clear();
    setPredictionText('Canvas reset. Draw a new digit!');
  };

  useEffect(() => {
    if (predictions.length > 0) {
      const labels = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
      const maxIndex = predictions.indexOf(Math.max(...predictions));
      setPredictionText(`Your number is: ${labels[maxIndex]}`);
    }
  }, [predictions]);

  return (
    <div className={styles.container} onMouseUp={mouseUp}>
      <h1 className={styles.heading}>Digit Recognition with TensorFlow.js</h1>
      <p className={styles.text}>Draw a number on the canvas below!</p>

      {modelDigits && (
        <div className={styles.canvasWrapper}>
          <canvas
            id="draw"
            className={styles.canvas}
            width="200"
            height="200"
            onMouseMove={mouseMove}
            onTouchMove={touchMove}
          ></canvas>
        </div>
      )}

      <button className={styles.button} onClick={resetCanvas}>
        Reset Canvas
      </button>

      <div className={styles.prediction}>{predictionText}</div>

      <iframe
        src="https://player.vimeo.com/video/711431860?h=36f8472fb2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className={styles.frame}
        title="MNIST Demo"
      ></iframe>
    </div>
  );
};

export default DigitsRecognition;
