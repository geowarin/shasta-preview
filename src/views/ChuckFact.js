import React from "react";
import {connect} from "shasta";
import actions from "../core/actions";
import DataComponent from "shasta-data-view";

@connect({
  joke: 'api.subsets.joke'
})
export default class ChuckFact extends DataComponent {

  resolveData () {
    actions.chuck.fact({
      subset: 'joke'
    });
  }

  renderLoader () {
    return (
      <div>
        Loading...
      </div>
    )
  }

  renderData ({joke}) {
    console.log(joke.getIn(['value', 'joke']));

    return <div>
      <h2>Chuck Norris Fact</h2>

      <p>{joke.getIn(['value', 'joke'])}</p>
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
