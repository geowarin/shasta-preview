import React from "react";
import {connect, Component} from "shasta";
import actions from "../core/actions";

@connect({
  count: 'counter.count'
})
export default class Counter extends Component {

  render() {
    return <div>
      <h2>Counter</h2>

      <p>{this.props.count}</p>

      <button onClick={() => actions.counter.increment()}>
        Increment
      </button>
      <button onClick={() => actions.counter.decrement()}>
        Decrement
      </button>
      <button onClick={() => actions.counter.reset()}>
        Reset
      </button>
    </div>
  }
}
