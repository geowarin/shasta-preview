import expect from "expect";
import {normalize, Schema, arrayOf} from "normalizr";

const response = new Schema('response');
const jokes = new Schema('jokes');

response.define({
  value: jokes
});

describe('schema', () => {

  it('should be normalized', () => {
    const json = {
      "type": "success",
      "value": {
        "id": 261,
        "joke": "Never look a gift Chuck Norris in the mouth, because he will bite your damn eyes off.",
        "categories": []
      }
    };
    const normalized = normalize(json, response);

    // console.log(JSON.stringify(normalized.entities, null, 2));
    expect(normalized.entities.jokes).toEqual({
      "261": {
        "id": 261,
        "joke": "Never look a gift Chuck Norris in the mouth, because he will bite your damn eyes off.",
        "categories": []
      }
    });
  });
});
