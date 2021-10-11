import { createStore } from 'redux';
import { createWrapper, applyMiddleware } from 'next-redux-wrapper';
import { devToolsEnhancer } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'

const makeStore = context => createStore(rootReducer, devToolsEnhancer());

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});
