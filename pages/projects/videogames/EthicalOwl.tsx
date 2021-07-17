/* eslint-disable @next/next/no-sync-scripts */
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/videogames/EthicalOwl';

const EthicalOwl = () => {
  const cssFullImage = {
    maxWidth: '100%',
  };
  const cssBoxImage = {
    w: '15rem',
    h: '15rem',
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bgImage={prefix + '/fsociety.jpg'}
      bgRepeat="repeat"
      width="100vw"
      maxWidth="100vw"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        m="1rem"
        width="90vw"
      >
        <Heading m="2rem" className="responsive_text">
          OS and Hacking simulation
        </Heading>

        <SimpleSection
          text="Project carried out in the first semester by: Magody and Marquez Diego"
          customCSS={cssBoxImage}
          srcImage={''}
        />

        <SimpleSection
          text="ETHICAL BUHO is a game based on the famous Mr.Robot series about a young man who works as a computer security engineer and uses his skills to protect the people he cares about. In ETHICAL BUHO we bring the player closer to a more didactic way of understanding ethical hacking as well as using file management in the process."
          customCSS={cssBoxImage}
          srcImage={''}
        />

        <Flex w="100%" h="30rem">
          <iframe
            src="https://player.vimeo.com/video/574746935?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              width: '100%',
              height: '100%',
            }}
            title="Adodot"
          ></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </Flex>

        <Heading m="2rem" className="responsive_text">
          Sprites
        </Heading>

        <SimpleSection
          text="Many of the resources were taken from the internet, from various video games. Since this game is not for commercial purposes, we only cite: Stardew Valley, Final Fantasy V, Pokemon. "
          customCSS={cssFullImage}
          srcImage={prefix + '/plantilla.jpg'}
        />

        <SimpleSection
          text=""
          customCSS={cssFullImage}
          srcImage={prefix + '/fondoCuarto.png'}
        />

        <Heading m="2rem" className="responsive_text">
          Piano
        </Heading>

        <SimpleSection
          text='When you approach the brown piano bench with the keys ("j, i, l, k") and once there by pressing the "a" button, a small black window will appear asking you for the title of the song you are going to compose. By typing for example: "symphony" and then pressing ENTER, a .txt file will be created in which the song you are going to play will be stored. A menu will appear on the screen and will indicate the keys with which you can play the piano. To exit this state, press ENTER.'
          customCSS={cssFullImage}
          srcImage={prefix + '/notas.jpg'}
        />

        <Heading m="2rem" className="responsive_text">
          The Operative system?
        </Heading>

        <SimpleSection
          text='When approaching the blue bench and pressing "a" a small Windows simulator will open. '
          customCSS={cssFullImage}
          srcImage={''}
        />

        <SimpleSection
          text='To exit the menu, left click on the circle at the bottom left with the Windows logo and then click on "shutdown". (If it was clicked by mistake in that place it is possible to eliminate that menu clicking again in the circle with the logo of Windows).'
          customCSS={cssFullImage}
          srcImage={prefix + '/pc.jpg'}
        />

        <SimpleSection
          text="Open 4 functional programs on the computer: "
          customCSS={cssFullImage}
          srcImage={''}
        />

        <Heading m="2rem" className="responsive_text" color="red">
          Notepad
        </Heading>

        <SimpleSection
          text='This program allows you to save information quickly.

          By left-clicking on the pad, we can write. First it will ask for a title, enter the desired short title and press ENTER. It will generate a .txt file with that name. (All files will be generated and managed in the "files" folder of the project.
          
          From that moment on everything that is written will be documented in the created file. To exit we must press ESCAPE. '
          customCSS={cssFullImage}
          srcImage={''}
        />

        <Heading m="2rem" className="responsive_text" color="red">
          Poli play piano program
        </Heading>

        <SimpleSection
          text='This program reads a text file and converts each letter into a sound. When clicking on the program we only have to enter the title of the file we want to read from the "files" folder. Example if our file is called: "test.txt" and is in the files folder (CodeBlocks project). To play it we simply type "test" (without the quotes). Once written, press ENTER and it will start to play it.
          In the video on the home page you can hear it running.
          The following graphic resource is property of the creators of Final Fantasy V '
          customCSS={cssFullImage}
          srcImage={prefix + '/piano.png'}
        />

        <Heading m="2rem" className="responsive_text" color="red">
          SQL++
        </Heading>

        <SimpleSection
          text="A database is a collection of information organized in such a way that a computer program can quickly select the pieces of data it needs. A database is an electronic file system. "
          customCSS={cssFullImage}
          srcImage={prefix + '/sqlmas.bmp'}
        />

        <Heading m="2rem" className="responsive_text" color="red">
          fsociety
        </Heading>

        <SimpleSection
          text={`This program allows you to "create scripts". By means of simple commands. When you click on it, a black screen will appear and it will ask for a script title, enter it and it will generate a .txt file. Then we write carefully the commands: -> /permute [word] [word] When writing for example "/permute to bc" it will print us the possible combinations between "abc": abc,acb,bac,bca,cab,cba. This function will allow us to search for matches between words and passwords until we find a match. Or complete all possible permutations.`}
          customCSS={cssFullImage}
          srcImage={prefix + '/permutar.jpg'}
        />

        <SimpleSection
          text={``}
          customCSS={cssFullImage}
          srcImage={prefix + '/mr robot.jpg'}
        />

        <SimpleSection
          text={`You can also interact with the CMD, example: If after adding title we write exactly "/system mode 200" and then press ENTER, we will see how our CMD is enlarged.`}
          customCSS={cssFullImage}
          srcImage={prefix + '/cmd.jpg'}
        />

        <SimpleSection
          text={`Typing "/system color 0a" will change the color of the letters that appear in the CMD. `}
          customCSS={cssFullImage}
          srcImage={''}
        />

        <SimpleSection
          text={`If we write "/system start [file]" it will execute the file that we have in the default directory, it is necessary to locate the command console through "cd documents..." until arriving to the folder that we want. Another utility of "start" is to open web pages "/system start www.google.com" it will execute the google page.`}
          customCSS={cssFullImage}
          srcImage={''}
        />

        <SimpleSection
          text={`If we type "/system ping www.facebook.com" we will be making a service request, this gives us an idea of what is done in a denial of service attack (DDoS attack) - If we type "/system copy /b 1.jpg+2.rar 3.jpg" we will copy these files into a new file, that is, we can put files inside an image.`}
          customCSS={cssFullImage}
          srcImage={''}
        />

        <SimpleSection
          text={`If we type "/system fc /b 1.txt 3.txt" it will compare two files in binary mode and tell us their differences. `}
          customCSS={cssFullImage}
          srcImage={prefix + '/scripter.bmp'}
        />

        <Heading m="2rem" className="responsive_text">
          Allegro library
        </Heading>

        <SimpleSection
          text='To create this videogame we have used the Allegro library, a free and open source library for videogame programming developed in C language. Allegro is a recursive acronym for "Allegro Low Level Game Routines". The library has functions for graphics, image manipulation, text, sounds, input devices (keyboard, mouse and game controllers) and timers, as well as routines for fixed point arithmetic and file system access.'
          customCSS={cssFullImage}
          srcImage={''}
        />
      </Flex>
    </Flex>
  );
};

export default EthicalOwl;
