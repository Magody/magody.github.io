/* eslint-disable @next/next/no-sync-scripts */
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { ChatbotRetrieval } from '../../../lib/ChatbotRetrieval';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/nlp/BrainChatbotRetrieval';

const BrainChatbotRetrieval: React.FC<{ basePathImageDir: string }> = (
  props,
) => {
  const [chatbot, set_chatbot] = useState<any>(null);
  const [prediction, setPrediction] = useState<string>(
    'Write something above 👨!',
  );
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const isSmallerScreen = useMediaQueryFixed('(max-width:600px)');

  const cssFullImage = {
    maxWidth: '100%',
  };
  const cssBoxImage = {
    w: '15rem',
    h: '15rem',
  };
  const refInput = useRef<any>(null);

  useEffect(() => {
    const load_chatbot = async () => {
      set_chatbot(new ChatbotRetrieval(prefix));
    };
    load_chatbot();
  }, []);

  useEffect(() => {
    if (chatbot == null) return;

    const load_resources = async () => {
      let result: boolean = await chatbot.loadModel();
      setIsLoaded(result);
    };

    if (!isLoaded) {
      load_resources();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatbot, isLoaded]);

  const handleKeyDown = (event: any) => {
    if (event.key == 'Enter') {
      predict();
    }
  };

  const predict = (): any => {
    if (!isLoaded) return;
    if (refInput.current == null) return;
    let sentence: string = refInput.current.value;

    if (sentence == '') {
      setPrediction('Sentence should not be empty!');
      return;
    }

    let p = chatbot.predict(sentence);
    let responses: string[] = p['intent']['responses'];
    let output = '';
    responses.forEach((element: string) => {
      output += element + ' ';
    });
    console.log(p);

    setPrediction(output);
  };

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      width="90vw"
      maxWidth="90vw"
    >
      <Heading m="2rem" className="responsive_text" style={{
        textAlign: "center"
      }}>
        Chatbot, intention recognition
      </Heading>
    <Text align={'center'} fontSize={'1rem'}>
      This chatbot was made using Tensorflow in the browser (Zero python except for training). It was trained with 5 sentences for each of the following categories: greetings, farewells, pizza and price of digital signature.
      The performance and knowledge will increase if we train with more data and for more categories.
    </Text>

    <br></br>
      {!isLoaded && <Box>Loading keras model...</Box>}

      <Box
      
      width={'100%'}
      margin={'0.5rem'}
      padding={"1rem"}
      
      border={"2px"}
      borderColor={"blue"}
      >


      {isLoaded && (
        <Box
        >
          <Text align={'center'} fontSize={'1.5rem'}>
            Say hello to the chatbot!:{' '}
          </Text>
          <Flex
            width={'100%'}
            height={'3rem'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            borderRadius={'0.5rem'}
          >
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              textAlign={'center'}
              fontSize={"1.5rem"}
            >
              👨:{' '}
            </Flex>
            <Input
            backgroundColor={'black'}
            height={"100%"}
            flex={1}
              onKeyDown={handleKeyDown}
              type="text"
              ref={refInput}
              placeholder={'pizza?'}
            ></Input>
            <Button
             onClick={predict} backgroundColor={'white'} color="blue">
              Send
            </Button>
          </Flex>
        </Box>
      )}

      <Box>
        <Text align={'center'} fontSize={'1.5rem'}>
          Chatbot answer:{' '}
        </Text>
        <Flex
          backgroundColor={'white'}
          color={'black'}
          padding={'0.5rem'}
          margin={'1rem'}
          borderRadius={'0.5rem'}
          justifyContent={'center'}
          alignItems={'center'}
          textAlign={'center'}
        >
          {'🤖: ' + prediction}
        </Flex>
      </Box>

      </Box>
        <br></br>
      <Text align={'center'} fontSize={'1.2rem'}>
      The Chatbot gets the sentence and convert it as a bag of words. And then predicts the nearest category based on the training data.{' '}. This is, I use a bag of words like [0,1,0,0,1...] to predict the intention of the sentence. 
       </Text>
       <br></br>
      <Text align={'center'} fontSize={'1rem'}>
      By the way, this is server less. Only using the model.h5 transformed by tensorflow js.
       </Text>

       <SimpleSection
        text="Example of sentence"
        customCSS={cssFullImage}
        srcImage={prefix + '/1.png'}
      />
      <br></br>
     <Text align={'center'} fontSize={'1.3rem'}>
      The secret to handle states and keep memory/conversation flow is to mix multiple chatbots connected as smart agents. Some chatbots predicting the natural language response and other chatbots predicting only the path to arrive to the correct Chatbot (Acting as routers).
      </Text>
      <br></br>
     <Text align={'center'} fontSize={'1.2rem'}>
      Unfortenatly, doing this requires a server or a long library in JS to process text and other issues. Since github is 100% server less, i can not show the Flask service demonstrating the state management. 
      </Text>

    </Flex>
  );
};

export default BrainChatbotRetrieval;
