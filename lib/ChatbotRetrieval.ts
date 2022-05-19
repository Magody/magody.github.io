import * as tf from '@tensorflow/tfjs';
import { bag_of_words } from './NLPUtils';

export class ChatbotRetrieval {
  path_model: string;
  model: any;
  words: string[] = [];
  classes: string[] = [];
  intents: any;

  constructor(path_model: string) {
    this.path_model = path_model;
  }

  async loadModel(): Promise<boolean> {
    this.model = await tf.loadLayersModel(this.path_model + '/model.json');

    this.words = await fetch(new Request(this.path_model + '/words.json'))
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
    this.classes = await fetch(new Request(this.path_model + '/classes.json'))
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
    console.log('Model, words and classes Loaded!', {
      words: this.words,
      classes: this.classes,
    });

    this.intents = await fetch(new Request(this.path_model + '/intents.json'))
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
        return undefined;
      });

    console.log('Model, words and classes Loaded!', {
      words: this.words,
      classes: this.classes,
      intents: this.intents,
      model: this.model,
    });

    let condition: boolean =
      this.intents !== undefined &&
      this.words.length > 0 &&
      this.classes.length > 0 &&
      this.model !== undefined;


    return condition;
  }

  predict(
    sentence: string,
    ERROR_THRESHOLD: number = 0,
    MINIMUN_ACCURACY: number = 0.5,
    verbose: number = 0,
    reload_model: boolean = false,
  ): any {
    // assumes model was loaded
    const bow = bag_of_words(sentence, this.words);
    const tensor_bow: tf.Tensor2D = tf.tensor2d(bow, [
      1,
      this.words.length,
    ]);
    let predictions: any[] = [];
    let self = this;
    tf.tidy(() => {
      const output = self.model.predict(tensor_bow) as any;
      predictions = Array.from(output.dataSync());
    });
    predictions = predictions.map((prediction: number, index: number) => {
      return [index, prediction];
    });
    // sort in descending order by probability
    predictions.sort((a, b) => {
      return a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0;
    });

    let result: any[] = [];
    predictions.forEach((pair_prediction: number[]) => {
      result.push({
        intent: this.classes[pair_prediction[0]],
        probability: pair_prediction[1],
      });
    });

    let bow_sum = 0;
    bow.forEach((element:number) => {
      bow_sum += element
    });
    let tag: string = result[0]['intent'];
    if(tag == "otros" && bow_sum > 0){
      tag = result[1]['intent']
    }

    if (result[0]['probability'] < MINIMUN_ACCURACY) {
      console.log('Low probability...');
      // tag = 'otros';
    }

    let result_intent = null;

    for (const intent_tag of Object.keys(this.intents)) {
      let intent_data: any = this.intents[intent_tag];
      if (intent_tag == tag) {
        result_intent = intent_data;
        break;
      }
    }

    result_intent['tag'] = tag;

    return {
      result,
      intent: result_intent,
      bow
    };
  }
}
