import React from 'react';
import {Component} from 'shasta';

import Counter from './Counter';
import ChuckFact from './ChuckFact';

export default class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home</h1>

        { /* <Counter /> */ }
        <ChuckFact />
      </div>
    )
  }
}
