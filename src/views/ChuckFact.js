import React from "react";
import {connect} from "shasta";
import actions from "../core/actions";
import DataComponent from "shasta-data-view";

@connect({
  jokes: 'api.entities.jokes'
})
export default class ChuckFact extends DataComponent {

  resolveData () {
    actions.chuck.fact();
  }

  renderLoader () {
    return (
      <div>
        Loading...
      </div>
    )
  }

  renderData ({jokes}) {
    const jokesEl = jokes.valueSeq().map((joke, id) => {
      return <div key={id}>{joke.get('joke')}</div>
    });

    return <div>
      <h2>Chuck Norris Fact</h2>

      {jokesEl}
    </div>
  }

  renderErrors (errors) {
    console.error(errors);
    return (
      <div>
        There was an error fetching Chuck Norris facts
      </div>
    )
  }
}
