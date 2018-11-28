import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {moviesData} from './reducers'
import App from './components/App';

const rootReducer = combineReducers({moviesData});
export const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App store={store} /></Provider>, document.getElementById('root'));
