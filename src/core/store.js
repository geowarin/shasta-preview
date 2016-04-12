import { createStore, createReducer } from 'shasta';
import localReducers from '../reducers/.lookup';
import plugins from './plugins';

export default createStore({
  plugins: plugins,
  reducers: [
    createReducer(localReducers)
  ]
})
