/* eslint-disable @next/next/no-sync-scripts */
import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/machine_learning/RecommendationSystemMatrix';

const RecommendationSystemMatrix = () => {
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
        Recommendations System with Collaborative Filtering
      </Heading>

      <SimpleSection
        text="Many companies do not have a recommendation system for their products either due to lack of knowledge of these systems or lack of money. And given that between 40% and 60% (according to Google) of content consumption of large companies comes from recommendations, there is a need to create a cost-effective and reusable way to make high quality group and personalized recommendations in order for companies to increase their profits by detecting similarities between customers' tastes in a collaborative way. A recommender system with reusable and parameterizable components will be developed so that small and medium-sized companies can use it at low cost with little development by the programmers of the company."
        customCSS={cssBoxImage}
        srcImage={prefix + '/0.png'}
      />

      <SimpleSection
        text="A diagram of the steps to be followed to recommend a product was designed. We start with a large number of products and filter them little by little: possible candidates are generated with matrix factorization and then similarities between the products are calculated to then take the top 10 products with the best score."
        customCSS={cssFullImage}
        srcImage={prefix + '/1.png'}
      />

      <SimpleSection
        text="The idea behind matrix factorization is that you want to predict the score table of all users, including values that are not yet qualified. This is achieved by multiplying a matrix A by a matrix B, each with parameters. This multiplication will have an error, so with an optimizer the values of both matrices are readjusted until the error is very low and therefore the system is able to predict values that do not yet exist."
        customCSS={cssFullImage}
        srcImage={prefix + '/2.png'}
      />

      <SimpleSection
        text="Using Python and Flask, a small product store was designed."
        customCSS={cssFullImage}
        srcImage={prefix + '/3.png'}
      />

      <SimpleSection
        text="All these products can be rated from 1 to 5."
        customCSS={cssFullImage}
        srcImage={prefix + '/4.png'}
      />

      <SimpleSection
        text="Users will rate some products and not others. Collaboratively if a person A likes some products that a person B likes, then if B likes a new product there is a probability that A will also like that product. Matrix factorization performs this process by generating some candidates, it also uses the context and recent search history of person A to balance the scores, in the re scoring phase it determines products that customer A already knows about and therefore discards them. The idea is always to give fresh recommendations."
        customCSS={cssFullImage}
        srcImage={prefix + '/5.png'}
      />

      <SimpleSection
        text="Note: an administration panel was also created for this project."
        customCSS={cssFullImage}
        srcImage={prefix + '/6.png'}
      />
    </Flex>
  );
};

export default RecommendationSystemMatrix;
