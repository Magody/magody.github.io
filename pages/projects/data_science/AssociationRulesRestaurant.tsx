/* eslint-disable @next/next/no-sync-scripts */
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { SimpleSection } from '../../../components/projects/SimpleSection';
import useMediaQueryFixed from '../../../hooks/use-media-query';

const prefix =
  (process.env.NEXT_PUBLIC_BASE_PATH || '') +
  '/images/projects/data_science/AssociationRulesRestaurant';

const AssociationRulesRestaurant: React.FC<{ basePathImageDir: string }> = (
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
        Creating association rules for a Shopping Cart
      </Heading>

      <SimpleSection
        text="I use the Apriori algorithm to perform Data Mining over a dataset 194k transactions in a restaurant. The objective is to create a rule 
        like 'If a person buys {A} then exist a high probability that will buy {B}."
        customCSS={cssBoxImage}
        srcImage={''}
      />
      <SimpleSection
        text="This way, we can make recommendations/discounts and other marketing strategies with items that we know
        are often bought together."
        customCSS={cssBoxImage}
        srcImage={''}
      />


<SimpleSection
        text=""
        customCSS={{
          h: '10rem',
        }}
        srcImage={prefix + '/10.png'}
      />


      <SimpleSection
        text="The dataset looks like this"
        customCSS={cssBoxImage}
        srcImage={prefix + '/1.png'}
      />



<SimpleSection
        text="These are the columns and types"
        customCSS={cssBoxImage}
        srcImage={prefix + '/2.png'}
      />


<SimpleSection
        text="In order to get better results I will simplify the Item Name feature.
        For example: Every food that beggins with 'Chicken' will be categorized as the same category.
        Then we could apply other recommendations techniques so we will have a pipeline of 2 ML algorithms to give really good recommendations."
        customCSS={cssBoxImage}
        srcImage={prefix + '/3.png'}
      />

<SimpleSection
        text="The feature engineering is the following: take the first name of the food.
        I reduced the amount of items from 381 to 87. So the association rules will be cleaner."
        customCSS={cssBoxImage}
        srcImage={prefix + '/4.png'}
      />

<SimpleSection
        text="Now I transform the transactions into a sparse matrix with ones in the position of the food ordered for that transaction."
        customCSS={cssBoxImage}
        srcImage={prefix + '/5.png'}
      />

<SimpleSection
        text="I get the most frequent ordered food with at least 10% of support in all transactions."
        customCSS={cssBoxImage}
        srcImage={prefix + '/6.png'}
      />


<SimpleSection
        text="It's time to Apriori. The first five association rules are the following. Note that I've used the LIFT as metric 
        since is more useful to generate strong association rules, over the confidence or support."
        customCSS={cssBoxImage}
        srcImage={prefix + '/7.png'}
      />


<SimpleSection
        text="The TOP 5 association rules with highest LIFT are:"
        customCSS={cssBoxImage}
        srcImage={prefix + '/8.png'}
      />

<SimpleSection
        text="Comparing each other we have:"
        customCSS={cssBoxImage}
        srcImage={prefix + '/9.png'}
      />

<Heading fontSize={"3rem"} m="1rem" className="responsive_text">
        Conclusions

      </Heading>

      <Text className="responsive_text">
        <ul>
          <li>
            If we sort the association rules by confidence there are items with more than 95% of confidence. 
            Lift is a very good metric, but in production we should test the best association rules based in LIFT and in 
            confidence. And keep the rules with best results.
          </li>
          <li>
            If a person buys {`{mango}`}, that person probably will want {`{plain,onion}`} and viceversa
          </li>
          <li>
            If a person buys {`{plain,pilau}`}, that person probably will want {`{mango}`} and viceversa
          </li>
          <li>
          If a person buys {`{mint}`}, that person probably will want {`{chicken,plain}`}
          </li>
          <li>
            Now we have to validate the rules. We have to put all of these items together or recommend to customer. For 
            people who asks for {"{plain,pilau}"} if we recommend them to buy {"{mango}"}. We have high chance to sell them a mango 
            even if they did not think about it.
          </li>
          <li>
            Is important to note that {`{A}=>{B} is not always the same as {B}=>{A}. In this restaurant study case the rules can be inverted for some rules.`}
          </li>
        </ul>

      </Text>

    </Flex>
  );
};

export default AssociationRulesRestaurant;
