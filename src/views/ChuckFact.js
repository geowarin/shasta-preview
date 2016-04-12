import React from "react";
import {connect} from "shasta";
import actions from "../core/actions";
import DataComponent from "shasta-data-view";

const getFirstJoke = (store) => {
  const jokes = store.getIn(['api', 'entities', 'jokes']);
  if (jokes) {
    return jokes.valueSeq().first();
  }
};

@connect({
  joke: getFirstJoke
})
export default class ChuckFact extends DataComponent {

  resolveData () {
    actions.chuck.getRandomFact();
  }

  renderLoader () {
    return (
      <div>
        Loading...
      </div>
    )
  }

  renderData ({joke}) {
    return <div>
      <h2>Chuck Norris Fact</h2>

      {joke.get('joke')}
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
