/* eslint-disable @next/next/no-sync-scripts */
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/machine_learning/AndroidGestureRecognition';

const AndroidGestureRecognition: React.FC<{ basePathImageDir: string }> = (
  props,
) => {
  const isSmallerScreen = useMediaQueryFixed('(max-width:600px)');

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
    >
      <Heading m="2rem" className="responsive_text">
        Gesture recognition using android
      </Heading>

      <SimpleSection
        text="The project consists of recognizing gestures made with the cell phone, using the phone's accelerometer and gyroscope to predict a custom type of movement that was previously
        the accelerometer and gyroscope of the phone to predict a custom type of movement that was previously trained and send that prediction to a server that will draw symbols on the screen according to the gesture predicted by the network.
        This is a small step forward to be able to save any type of gesture in the future and use the cell phone as an augmented reality controller in applications or video games on the web."
        customCSS={cssBoxImage}
        srcImage={prefix + '/0.png'}
      />

      <SimpleSection
        text="Through the movement of the hand with the cell phone, the sensors collect data, and this data will be used to train a neural network.
        data, and this data will be used to train a feedforward neural network.
        feedforward."
        customCSS={cssFullImage}
        srcImage={prefix + '/1.png'}
      />

      <SimpleSection
        text="The system has a CRUD of operations for the management of gestures and other useful user information.
        other useful user information. For training it is necessary to
        at least 10 repetitions must be stored for each gesture, and from these examples another
        from these examples another 200 are generated using Data augmentation. It is
        that is, several mathematical operations are applied to the data so that new data is generated
        new data are generated but without losing the main essence."
        customCSS={cssFullImage}
        srcImage={prefix + '/2.png'}
      />

      <SimpleSection
        text="The system also has a data management panel, this was done with Angular."
        customCSS={cssFullImage}
        srcImage={prefix + '/3.png'}
      />

      <SimpleSection
        text="The neural network receives an input of 600 variables: 1
        00 data for each axis and for each type of sensor (Gyroscope and Accelerometer). 
        (Gyroscope and Accelerometer) with this input it seeks to predict 
        the type of gesture. The application connects to a server and 
        communicates its prediction, the server then draws on the screen an arrow if it was an 
        the screen an arrow if it was a lateral movement or a cross if it was a shooting movement. 
        was a movement such as a shot. These were the two main types of gestures
         the network was trained with."
        customCSS={cssFullImage}
        srcImage={prefix + '/4.png'}
      />

      <SimpleSection
        text=""
        customCSS={cssFullImage}
        srcImage={prefix + '/5.png'}
      />

      <Text className="responsive_text">
        Few epochs and a learning rate of 0.01 with 600 input neurons, 35 in a
        hidden layer, were used for training. 0.01 with 600 input neurons, 35 in
        a hidden layer, 18 in a second hidden layer and N neurons in the output
        layer, 18 in a second hidden layer and N neurons in the output layer. N
        depends on the number of gestures saved by the user. As conclusion, a
        hit rate of 80% was obtained. The neural network could not recognize
        gesture types well when the device was used in streaming mode (live) but
        in static in streaming mode (live), but in static predictions, where
        only the gesture was where only the gesture was saved and then sent to
        be predicted, the predicted, the network predicted correctly. For signal
        handling, it is best to use convolutional or convolutional best to use
        convolutional networks or recurrent neural networks to achieve a higher
        accuracy score. to achieve a higher accuracy score.
      </Text>
    </Flex>
  );
};

export default AndroidGestureRecognition;
