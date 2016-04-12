import { createAction } from 'tahoe';
import { Schema, valuesOf } from 'normalizr';

const response = new Schema('response');
const joke = new Schema('jokes');

response.define({
  value: joke
});

export const getRandomFact = createAction({
  endpoint: () => `http://api.icndb.com/jokes/random?exclude=[explicit]`,
  method: 'GET',
  model: response
});
