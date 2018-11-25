import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {moviesData} from './reducers'
import App from './App';

const rootReducer = combineReducers({moviesData});
export const movieStore = createStore(rootReducer);

ReactDOM.render(<Provider store={movieStore}><App /></Provider>, document.getElementById('root'));
