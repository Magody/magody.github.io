/* eslint-disable @next/next/no-sync-scripts */
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/web_scrapping/anime_flv_scrapper';

const Anime_flv_scrapper: React.FC<{ basePathImageDir: string }> = (props) => {
  const isSmallerScreen = useMediaQueryFixed('(max-width:600px)');

  const cssFullImage = {
    maxWidth: '100%',
  };
  const cssBoxImage = {
    w: '15rem',
    h: '15rem',
    backgroundColor: 'white',
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
        Web scrapping with Selenium (bot undetectable)
      </Heading>

      <Text className="responsive_text">
        <p>
         This is a Web Scrapping with some analysis (not deep) of the animes depending on the 
         emotions This is made over the webpage: {' '}
        </p>
        <a href="https://www3.animeflv.net/">
        https://www3.animeflv.net/
        </a>
      </Text>
      <SimpleSection
        text=""
        customCSS={cssBoxImage}
        srcImage={prefix + '/0.png'}
      />

<SimpleSection
        text="I prefer scrapy to create the web scrapping pipeline. But this page doesn't want to be scrapped, look:"
        customCSS={cssFullImage}
        srcImage={prefix + '/8.png'}
      />

<SimpleSection
        text="Furthermore, in order to get the reactions we must perform first a reaction with an account. This is, we have to be logged in: "
        customCSS={cssFullImage}
        srcImage={prefix + '/1.png'}
      />


<SimpleSection
        text="The login with selenium has this form. To fill fields and set the timing to avoid request problems. Before a login we make a <prewarm>, because this page popup some ADS when we click even through selenium. So we fake some clicks and close the ADS"
        customCSS={cssFullImage}
        srcImage={prefix + '/17.png'}
      />

      <SimpleSection
        text="Fortunately, we do not need to do complex crawl to get the item's urls. They have a pretty anime browser with pagination:"
        customCSS={cssFullImage}
        srcImage={prefix + '/2.png'}
      />

      <SimpleSection
        text="We want to collect some useful data like: scoring, votes..."
        customCSS={cssFullImage}
        srcImage={prefix + '/3.png'}
      />

      <SimpleSection
        text="Title, description, tags for NLP processing: "
        customCSS={cssFullImage}
        srcImage={prefix + '/4.png'}
      />

      <SimpleSection
        text="The count of followers:"
        customCSS={cssFullImage}
        srcImage={prefix + '/5.png'}
      />

      <SimpleSection
        text="The number of episodes:"
        customCSS={cssFullImage}
        srcImage={prefix + '/6.png'}
      />

      <SimpleSection
        text="And the most important part. The reactions. This is pretty hard since is part of DisQus system as an iframe"
        customCSS={cssFullImage}
        srcImage={prefix + '/7.png'}
      />

      

      <SimpleSection
        text="Since there are a lot of items. I have created a JOBS Systems like the JOBS systems of scrapy. So, we can parse in separated points in time. We will collect a few items (shards folder) as CSV and in the end we will merge all of them."
        customCSS={cssFullImage}
        srcImage={prefix + '/9.png'}
      />

      <SimpleSection
        text="The jobs folder remember the state. Every job initially has 100 URLs, and every terminal instance executes one job. If any error exists, that urls are not consumed. Execution time saves how many times we executed that job."
        customCSS={cssFullImage}
        srcImage={prefix + '/10.png'}
      />

      <SimpleSection
        text="The collected data has this format. There are *.csv associated for every job and execution time. In case we run the program in different days, there is no problem."
        customCSS={cssFullImage}
        srcImage={prefix + '/11.png'}
      />

      <SimpleSection
        text="For login part we need to provide an username and a password."
        customCSS={cssFullImage}
        srcImage={prefix + '/12.png'}
      />

      <SimpleSection
        text="There are two main files: app_create_jobs.py has the responsability of browse all items, collect the URLs to items and then split into n jobs (36 jobs in this case) and app_worker has the responsability of execute a job passed as argument. We have in total 36 app_workers (one for each job):"
        customCSS={cssFullImage}
        srcImage={prefix + '/13.png'}
      />

<SimpleSection
        text="After collecting the data we merge with this code. Following an ETL process:"
        customCSS={cssFullImage}
        srcImage={prefix + '/14.png'}
      />

<SimpleSection
        text="For cleaning and transforms"
        customCSS={cssFullImage}
        srcImage={prefix + '/15.png'}
      />

<SimpleSection
        text="We perform some feature engineering to get the right sentimental analysis and dont discriminate by not being popular"
        customCSS={cssFullImage}
        srcImage={prefix + '/16.png'}
      />


      <Heading fontSize={'3rem'} m="2rem" className="responsive_text">
        Emotions slices
      </Heading>

      <Heading as={"h3"} fontSize={'2rem'} m="2rem" className="responsive_text">
        After collecting the data we can perform some analysis
      </Heading>

      <Heading as={"h4"} fontSize={'2rem'} m="2rem" className="responsive_text">
      The most liked animes are: 
      </Heading>

      <Box bg={'white'}>
        <SimpleSection
          text=""
          customCSS={cssFullImage}
          srcImage={prefix + '/liked(relative).png'}
        />
      </Box>

      <Heading as={"h4"} fontSize={'2rem'} m="2rem" className="responsive_text">
      The funniest animes are: 
      </Heading>
      

      <Box bg={'white'}>
        <SimpleSection
          text=""
          customCSS={cssFullImage}
          srcImage={prefix + '/funny(relative).png'}
        />
      </Box>

      <Heading as={"h4"} fontSize={'2rem'} m="2rem" className="responsive_text">
      The most loved animes are:
      </Heading>
      <Box bg={'white'}>
        <SimpleSection
          text=" "
          customCSS={cssFullImage}
          srcImage={prefix + '/loved(relative).png'}
        />
      </Box>

      <Heading as={"h4"} fontSize={'2rem'} m="2rem" className="responsive_text">
      The saddest animes are: 
      </Heading>
      <Box bg={'white'}>
        <SimpleSection
          text="The saddest animes are: "
          customCSS={cssFullImage}
          srcImage={prefix + '/sad(relative).png'}
        />
      </Box>

      <Heading as={"h4"} fontSize={'2rem'} m="2rem" className="responsive_text">
      The most surprising animes are: 
      </Heading>
      <Box bg={'white'}>
        <SimpleSection
          text="The most surprising animes are: "
          customCSS={cssFullImage}
          srcImage={prefix + '/surprise(relative).png'}
        />
      </Box>
      <Heading as={"h4"} fontSize={'2rem'} m="2rem" className="responsive_text">
      Animes that caused people be angry:
      </Heading>
      <Box bg={'white'}>
        <SimpleSection
          text=""
          customCSS={cssFullImage}
          srcImage={prefix + '/angry(relative).png'}
        />
      </Box>
      <Heading fontSize={'3rem'} m="2rem" className="responsive_text">
        Populars animes slicing
      </Heading>

      <Heading as={"h4"} fontSize={'2rem'} m="2rem" className="responsive_text">
      Most popular animes, by followers:
      </Heading>

      <Box bg={'white'}>
        <SimpleSection
          text=""
          customCSS={cssFullImage}
          srcImage={prefix + '/df_popular_followers(relative).png'}
        />
      </Box>


      <Heading as={"h4"} fontSize={'2rem'} m="2rem" className="responsive_text">
      Most popular animes, by reactions count:
      </Heading>
      <Box bg={'white'}>
        <SimpleSection
          text=""
          customCSS={cssFullImage}
          srcImage={prefix + '/df_popular_reactions(relative).png'}
        />
      </Box>

      <Heading as={"h4"} fontSize={'2rem'} m="2rem" className="responsive_text">
      Most popular animes, by votes:
      </Heading>
      <Box bg={'white'}>
        <SimpleSection
          text=""
          customCSS={cssFullImage}
          srcImage={prefix + '/df_popular_votes(relative).png'}
        />
      </Box>

      <Heading as={"h4"} fontSize={'2rem'} m="2rem" className="responsive_text">
      Best rated animes:
      </Heading>
      <Box bg={'white'}>
        <SimpleSection
          text=""
          customCSS={cssFullImage}
          srcImage={prefix + '/df_best_rated(relative).png'}
        />
      </Box>
    </Flex>
  );
};

export default Anime_flv_scrapper;
