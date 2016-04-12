import React from "react";
import {Provider, Component, PropTypes} from "shasta";
import {Router} from "shasta-router";

export default class RootView extends Component {
  static displayName = 'RootView';
  static propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    routes: PropTypes.node.isRequired
  };

  render () {
    const {store, history, routes} = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    )
  }
}
