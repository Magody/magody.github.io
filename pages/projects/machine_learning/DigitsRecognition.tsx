/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/DigitsRecognition.module.css';

import * as tf from '@tensorflow/tfjs';
import { useEffect, useRef, useState } from 'react';
import { CanvasDrawerDigits } from '../../../lib/CanvasDrawerDigits';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { SimpleSection } from '../../../components/projects/SimpleSection';

let modelLinear: tf.Sequential;
let modelDigits: tf.LayersModel;

const trainNewModel = async () => {
  modelLinear = tf.sequential();
  modelLinear.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  modelLinear.compile({
    loss: tf.losses.meanSquaredError,
    optimizer: 'sgd',
  });

  const X = tf.tensor1d([3.2, 4.4, 5.5]);
  const y = tf.tensor1d([1.6, 2.7, 3.5]);

  await modelLinear.fit(X, y);

  console.log('model trained!');
};

const modelPredict = (val: number): number => {
  const output = modelLinear.predict(tf.tensor2d([val], [1, 1])) as any;
  return Array.from(output.dataSync())[0] as number;
};

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/machine_learning/DigitsRecognition';

const loadModelMnistDigits = async () => {
  modelDigits = await tf.loadLayersModel(prefix + '/model.json');
  // console.log('loaded', modelDigits);
};

const modelDigitsPredict = (imageData: ImageData): number[] => {
  let predictions: number[] = [];
  tf.tidy(() => {
    // Convert the canvas pixels to a Tensor of the matching shape
    let img = tf.browser.fromPixels(imageData, 1);
    img = img.reshape([1, 28, 28, 1]);
    img = tf.cast(img, 'float32');

    console.log(img);
    // console.log(modelDigits.predict)

    // Make and format the predications
    const output = modelDigits.predict(img) as any;

    // console.log(output)
    // Save predictions on the component
    predictions = Array.from(output.dataSync());
    console.log(predictions);
    predictions = predictions.map((x) => Math.round(x * 100));
  });

  return predictions;
};

const DigitsRecognition: NextPage = () => {
  const [prediction, setPrediction] = useState(0);
  const [predictions, setPredictions] = useState<number[]>([]);

  const [drawer, set_drawer] = useState<any>(null);

  useEffect(() => {
    trainNewModel();
    setPrediction(modelPredict(2));
    loadModelMnistDigits();

    const canvas: any = document.getElementById('draw');
    set_drawer(new CanvasDrawerDigits(canvas, document));
  }, []);

  const mouseUp = () => {
    if (drawer == null) return;
    drawer.pos.x = -1;
    drawer.pos.y = -1;
    const image = drawer.getImageData();
    setPredictions(modelDigitsPredict(image));
  };

  const touchUp = () => {
    mouseUp();
  };

  const touchMove = (event: any) => {
    var touch = event.touches[0];
    drawer.move(touch.pageX, touch.pageY);
    /*
    var mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      console.log(mouseEvent)
      
      */
  };

  const mouseMove = (event: any) => {
    if (drawer == null) return;

    if (event.buttons !== 1) {
      return;
    }

    drawer.move(event.pageX, event.pageY);
  };

  const canvasClear = () => {
    if (drawer == null) return;
    drawer.clear();
  };

  let canvasWidth = '200px';
  let canvasHeight = '200px';

  let componentPrediction = <div></div>;
  if (predictions.length > 0) {
    let messages = [
      'ZERO',
      'ONE',
      'TWO',
      'THREE',
      'FOUR',
      'FIVE',
      'SIX',
      'SEVEN',
      'EIGHT',
      'NINE',
    ];
    let maxValue = 0;
    let maxIndex = -1;
    let lastMaxIndex = -1;

    predictions.forEach((probability: number, index: number) => {
      if (probability > maxValue) {
        maxValue = probability;
        maxIndex = index;
      }
      if (probability > 0.0000001) {
        lastMaxIndex = index;
      }
    });
    maxValue = Math.floor(maxValue * 100) / 100;

    let extraInfo = '';
    if (lastMaxIndex != -1 && lastMaxIndex != maxIndex) {
      extraInfo += `And ${messages[lastMaxIndex]} with less probability.`;
    }

    componentPrediction = (
      <div
        style={{
          textAlign: 'center',
          color: "yellow",
          fontSize: "2rem"
        }}
      >{`Your number is: ${messages[maxIndex]} with high probabilty. ${extraInfo}`}</div>
    );
  }


  const cssFullImage = {
    maxWidth: '100%',
  };
  const cssBoxImage = {
    w: '15rem',
    h: '15rem',
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="90vw"
      maxWidth="90vw"
      onMouseUp={mouseUp}
      onTouchEnd={touchUp}
    >
      <Heading
        m="2rem"
        className="responsive_text"
        style={{
          textAlign: 'center',
        }}
      >
        Digits classification on the browser
      </Heading>

      <Text align={'center'} fontSize={'1rem'}>
        Draw a number in the white space by yourself!. Use a mouse if possible
        for better results
      </Text>

      <div
        style={{
          backgroundColor: 'white',
          border: '1px solid black',
          width: canvasWidth,
          height: canvasHeight,
        }}
      >
        <canvas
          id="draw"
          style={{
            width: canvasWidth,
            height: canvasHeight,
          }}
          width={canvasWidth}
          height={canvasHeight}
          onMouseMove={mouseMove}
          onTouchMove={touchMove}
        ></canvas>
      </div>

      <Button
        margin="1rem"
        backgroundColor={'Green'}
        color="white"
        onClick={canvasClear}
      >
        Reset
      </Button>

      {componentPrediction}
      <br></br>

      <Text align={'center'} fontSize={'1rem'}>
        This is a classifier build with tensorflow and tensorflowjs. The
        procedure is similar to my Chatbot project.
      </Text>

      <Text align={'center'} fontSize={'1.2rem'}>
        The model accuracy is over 97% in the MNIST Dataset. But the
        transformation from canvas 200px-200px to 28px-28px impacts the
        performance. Anyway, is able to recognoze the most of numbers.
      </Text>

      <Flex w="100%" h="30rem">
        <iframe
          src="https://player.vimeo.com/video/711431860?h=36f8472fb2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            width: '100%',
            height: '100%',
          }}
          title="MNIST Demo in this page"
        ></iframe>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </Flex>
      <SimpleSection
        text="The training dataset looks like this:"
        customCSS={cssFullImage}
        srcImage={prefix + '/1.png'}
      />



    </Flex>
  );
};

export default DigitsRecognition;