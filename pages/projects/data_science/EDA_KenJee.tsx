/* eslint-disable @next/next/no-sync-scripts */
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/data_science/EDA_KenJee';

const EDA_KenJee: React.FC<{ basePathImageDir: string }> = (
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
        EDA, Clustering and Sentimental analysis
      </Heading>

      <Text className="responsive_text">
        <p>Exploratory Data Analysis and Machine Learning to help Youtuber Ken Jee to improve performance. The full analysis is on Kaggle in: </p>
        <a href='https://www.kaggle.com/magody/eda-clustering-and-sentimental-analysis'>https://www.kaggle.com/magody/eda-clustering-and-sentimental-analysis</a>
      </Text>
      <SimpleSection
        text=""
        customCSS={cssBoxImage}
        srcImage={prefix + '/0.png'}
      />

      <SimpleSection
        text="I made 12+ important questions in order to improve CTR, subscription ratio and more. In this analysis i've performed EDA over the data set of K.J. I've model clustering with TF-ITF of title topics in Question 4 and about user comments in Question 13 and some sentimental analysis, the rest is simple analysis."
        customCSS={cssFullImage}
        srcImage={prefix + '/1.png'}
      />

      <SimpleSection
        text="I got some usefull insights about the best thumbnail-title combination:"
        customCSS={cssFullImage}
        srcImage={prefix + '/2.png'}
      />

      <SimpleSection
        text="A deep CTR causes analysis with correlations:"
        customCSS={cssFullImage}
        srcImage={prefix + '/3.png'}
      />

      <SimpleSection
        text="Using NLP I've cluster the most important topics in order to repeat them in future"
        customCSS={cssFullImage}
        srcImage={prefix + '/4.png'}
      />

      <SimpleSection
        text="And sentimental analysis, from negative comments i've got interesting recommendations."
        customCSS={cssFullImage}
        srcImage={prefix + '/5.png'}
      />

      <Heading fontSize={"3rem"} m="2rem" className="responsive_text">
        Conclusions and recommendations
      </Heading>

      <Heading fontSize={"1.5rem"} m="2rem" className="responsive_text">
        From sentimental analysis comments analysis:
      </Heading>


      <Text className="responsive_text">
        <ul>
          <li>
            People don’t like the clickbait titles and “awkward” face in thumbnails. Since, show the face in thumbnails is a SEO strategy proven, you probably want to ignore that or change a little the photo strategy.
          </li>
          <li>
            Improve the audio/mic quality.
          </li>
          <li>
            Try to bring new information, not the information considered “boring”.
          </li>
          <li>
            Speak with a more natural/faster rhythm.
          </li>
        </ul>

      </Text>


      <Heading fontSize={"1.5rem"} m="2rem" className="responsive_text">
        Increase the CTR:
      </Heading>

      <Text className="responsive_text">
        <ul>
          <li>
            Most videos don’t use psychological triggers. So, include someone.
          </li>
          <li>
            Use numbers (3,5,7,10) in titles. Avoid (2,4,6) because these may feel “incomplete”.
          </li>
          <li>
            Best CTR titles used in the channel are “Should you”, “ you ”, related to beginner/started guide or related to very specific projects. But in specific projects, people leave when it’s end, try to redirect them to videos with higher subscription rate (see the objective 2 below).
          </li>
          <li>
            Don’t put multiple objects that saturate the thumbnail.
          </li>
          <li>
            The best clusters (topics) of videos to get high CTR are: tutorial related, data science life (portfolio,daily,learning,etc.) and job related.
          </li>
          <li>
            Expand and merge topics. Talk about a popular “mainstream” topic related to data science, but in thumbnail let very clear that you will talk about machine learning/analytics or data science. For example: Crypto gets popular, talk about data science applied which people can take advantage of the situation. BUT REMEMBER: Doing this abruptly will cause some subscribers to unsubscribe. Handling a mainstream topic can help a lot to the channel but it will annoy several followers. Do so with caution.
          </li>
        </ul>

      </Text>


      <Heading fontSize={"1.5rem"} m="2rem" className="responsive_text">
        Increase subscription rate:
      </Heading>


      <Text className="responsive_text">
        <ul>
          <li>
            First, link (using cards, pinned comments, description, etc) the videos with best CTR and avg watch time to the videos with best subscription rate. This way, the general subscription ratio will increase.
          </li>
          <li>
            The videos that get more subs are about: beginner introduction to data science, experience (if i had to start again...) and recommendations related to data science (numbered are better, Example: 3 Reasons You Should NOT...). Also, recommendations are shared more often.
          </li>
          <li>
            The videos that get more un-subs are about: Q and A and channel announcements.
          </li>
        </ul>

      </Text>

      <Heading fontSize={"1.5rem"} m="2rem" className="responsive_text">
        Increase average watch time:
      </Heading>


      <Text className="responsive_text">
        <ul>
          <li>
            Use curiosity triggers like “The Secret...” and talk about something “unique”.
          </li>
          <li>
            Use urgency triggers like “Why Right NOW is a Great Time...”.
          </li>
          <li>
            Content about things they have/need to know “What You Need...”. Be aware of repetitive click bait. A little portion of users really don’t like that. Use click bait more hiddenly.
          </li>
          <li>
            Things like “You need to start to ...”, are suitable topics. But try to don’t get repetitive.
          </li>
        </ul>

      </Text>




    </Flex>
  );
};

export default EDA_KenJee;
