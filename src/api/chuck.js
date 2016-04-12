import { createAction } from 'tahoe';
import { Schema } from 'normalizr';

const joke = new Schema('chuck-fact');

export const fact = createAction({
  endpoint: () => `http://api.icndb.com/jokes/random`,
  method: 'GET',
  model: joke
});
