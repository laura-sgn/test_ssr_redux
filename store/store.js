import { createStore, combineReducers } from 'redux';
import { createWrapper, applyMiddleware } from 'next-redux-wrapper';
import { devToolsEnhancer } from 'redux-devtools-extension'
import { notesReducer } from "./reducers/notesReducer"

const rootReducer = combineReducers({
  notes: notesReducer,
})

const makeStore = context => createStore(rootReducer, devToolsEnhancer());

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});
