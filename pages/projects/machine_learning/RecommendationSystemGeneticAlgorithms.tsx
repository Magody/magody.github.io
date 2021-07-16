/* eslint-disable @next/next/no-sync-scripts */
import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/machine_learning/RecommendationSystemGeneticAlgorithms';

const RecommendationSystemGeneticAlgorithms = () => {
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
        Genetic algorithms for youtube recommendations
      </Heading>

      <SimpleSection
        text="Using a Kaggle dataset of youtube videos with ratings, i use a chromosome 
        of N gens, where N is the amount of recommendations to predict.The idea is to choose 
        the best set of recommendations for a given set of topics/categories."
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <SimpleSection
        text="Each gen contains the information of a single youtube video, using this information of likes and dislikes we can get an aptitude function for each generation, at the end
        only the best combination of gens (recommendations/chromosomes) will be alive and then we will cross and mutate the gens (videos) in order to get the perfect combination of videos to recommend to a user."
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <SimpleSection
        text="The accuracy when i force to each gen to be a part of the recommendations
        is low. This project was made with that purpuse in head in order to explore and learn about which is the best way to make recommendations.
        This can be considerer as a Content-based recommendation system. The conclusion of this work is that content-based is not as powerful as collaborative filtering, matrix factorization or 
        neural networks. But it was something very interesting to do."
        customCSS={cssBoxImage}
        srcImage={''}
      />

      <SimpleSection
        text="In this image I ask for 5 recommendations of various topics. The fitness function considers a ratio between likes and dislikes where 1% of dislikes to likes indicates a success and the lower the number the better."
        customCSS={cssFullImage}
        srcImage={prefix + '/0.png'}
      />

      <SimpleSection
        text="In the following image I show and ask for recommendations taking into account keywords. For each match the score increases 100 points in the fitness function."
        customCSS={cssFullImage}
        srcImage={prefix + '/1.png'}
      />

      <SimpleSection
        text="The predictions are not the best but they are good enough to keep you watching videos for a while. As aside note, this project was made in Java."
        customCSS={cssBoxImage}
        srcImage={''}
      />
    </Flex>
  );
};

export default RecommendationSystemGeneticAlgorithms;
