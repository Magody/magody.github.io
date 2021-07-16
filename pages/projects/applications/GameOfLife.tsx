import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { CanvasDrawerGameLife } from '../../../components/lib/CanvasDrawerGameLife';
import classes from './GameOfLife.module.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

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
      drawer = new CanvasDrawerGameLife(
        canvas,
        document,
        generations,
        duration,
      );

      // callback
      const mouseUp = () => {
        document.removeEventListener('mousemove', dibujarMouse);
      };

      // callback
      const dibujarMouse = (event: any) => {
        drawer.tryToDrawCell(event.layerX, event.layerY);
      };

      // callback
      const mouseDown = (event: any) => {
        const wasValidClick = drawer.tryToDrawCell(event.layerX, event.layerY);

        if (wasValidClick) {
          document.addEventListener('mousemove', dibujarMouse);
        }
      };

      document.addEventListener('mousedown', mouseDown);
      document.addEventListener('mouseup', mouseUp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerBegin = () => {
    if (generations < 1) {
      MySwal.fire({
        title: <p>Generations must be &gt;= 1</p>,
      });
      return;
    }

    if (duration < 0) {
      MySwal.fire({
        title: <p>Delay must be &gt;= 0</p>,
      });
      return;
    }

    drawer?.beginSimulation(refGenerationFeedback.current);
  };

  const handlerCleanUp = () => {
    drawer?.cleanSpace();
  };

  const handlerReset = () => {
    drawer?.resetWorld();
  };

  const handlerOnChangeGenerations = (val: number) => {
    setGenerations(val);
    drawer?.setGenerations(val);
  };

  const handlerOnChangeDuration = (val: number) => {
    setDuration(val);
    drawer?.setDuration(val);
  };

  return (
    <Flex justifyContent="center" alignItems="center" direction="column">
      <Heading textAlign="center">The game with 0 players</Heading>

      <Text>
        Click on the black space to enlarge cells to your liking, you can hold
        down to add them faster. You can do this at at any time, even when the
        run is started.
      </Text>

      <Text>
        Set the number of generations and the duration of each with the sliders
        below. Click Start when you are ready!
      </Text>
      <canvas width="100vw" height="80vh" id="dibujito"></canvas>

      <Text m="0.5rem" ref={refGenerationFeedback}></Text>
      <Flex direction="row" m="0.3rem" w="100%">
        <Box m="1rem" flex="1">
          <Text m="0.2rem">Generations: {generations}</Text>
          <Slider
            //bg="red"
            onChange={handlerOnChangeGenerations}
            defaultValue={200}
            min={5}
            max={500}
            step={5}
          >
            <SliderTrack bg="red.100">
              <Box position="relative" />
              <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <Text>Generations of game</Text>
        </Box>

        <Box id="duracion" m="0.3rem" flex="1">
          <Text>Duration: {duration} ms</Text>
          <Slider
            //bg="blue"
            onChange={handlerOnChangeDuration}
            defaultValue={50}
            min={50}
            max={1000}
            step={50}
          >
            <SliderTrack bg="red.100">
              <Box position="relative" />
              <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <Text>Duration of each generation (miliseconds)</Text>
        </Box>
      </Flex>

      <HStack spacing="1rem">
        <Button colorScheme="facebook" onClick={handlerBegin}>
          Start
        </Button>
        <Button colorScheme="facebook" onClick={handlerCleanUp}>
          Clean up
        </Button>
        <Button colorScheme="facebook" onClick={handlerReset}>
          Reset
        </Button>
      </HStack>
    </Flex>
  );
};

export default GameOfLife;
